import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, tap, filter } from 'rxjs/operators';
import { Player } from './player';
import { MessageService } from '../messages/message.service';
import { TeamService} from '../teams/team.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlayerService {

  private playerUrl = 'api/players';  // URL to web api

  onLoaded: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPlayers (): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl)
      // .map(res => res.filter(<Player>(x) => x.teamId > 0))
      .pipe(
        tap(players => this.log(`fetched players`)),
        catchError(this.handleError('getPlayers', []))
      );
  }

  /** GET players by id. Error with 404 if id not found */
  getPlayerById(id: number): Observable<Player> {
    const url = `${this.playerUrl}/${id}`;
    console.log("get player by id: " + url + ' ' + id );
    return this.http.get<Player>(url).pipe(
      tap(_ => this.log(`fetched player id=${id}`)),
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
