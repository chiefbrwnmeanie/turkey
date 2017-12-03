import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';
import {Player} from './player';


@Injectable()
export class PlayerService {

  private playerUrl = 'api/players';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET all players. Error with 404 if id not found */
  getPlayers (): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl)
      .pipe(
        tap(players => this.log(`fetched players`)),
        catchError(this.handleError('getPlayers', []))
      );
  }

  /** GET player by id. Error with 404 if id not found */
  getPlayer(id: number): Observable<Player> {
    const url = `${this.playerUrl}/${id}`;
    return this.http.get<Player>(url).pipe(
      tap(_ => this.log(`fetched player id=${id}`)),
      catchError(this.handleError<Player>(`getPlayer id=${id}`))
    );
  }

  /** GET player by id. Return `undefined` when id not found */
  getPlayerNo404<Data>(id: number): Observable<Player> {
    const url = `${this.playerUrl}/?player=${id}`;
    return this.http.get<Player[]>(url)
      .pipe(
        map(players => players[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          this.log(`${outcome} player id=${id}`);
        }),
        catchError(this.handleError<Player>(`getPlayer id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Player Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('Player Service: ' + message);
  }
}
