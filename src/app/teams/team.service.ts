import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Team } from './team';
import { MessageService } from '../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamService {

  private teamUrl = 'api/teams';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl)
      .pipe(
        tap(teams => this.log(`fetched teams`)),
        catchError(this.handleError('getTeams', []))
      );
  }

  /** GET team by id. Error with 404 if id not found */
  getTeamById(id: number): Observable<Team> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  /** GET team by id. Return `undefined` when id not found */
  getTeamNo404<Data>(id: number): Observable<Team> {
    const url = `${this.teamUrl}/?team=${id}`;
    return this.http.get<Team[]>(url)
      .pipe(
        map(teams => teams[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? `fetched` : `did not find`;
          this.log(`${outcome} team id=${id}`);
        }),
        catchError(this.handleError<Team>(`getTeam id=${id}`))
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

  /** Log a Team Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('Team Service: ' + message);
  }
}
