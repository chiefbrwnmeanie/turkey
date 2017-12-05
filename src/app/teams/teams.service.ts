import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Team } from '../teams/team';

@Injectable()
export class TeamsService {
  private teams: Team[] = [
    {id: 1, name:  'We\'re on Strike', league: 'Manic Monday Mixers', rank: 1},
    {id: 2, name:  'Happy Rollers', league: 'Manic Monday Mixers', rank: 2},
    {id: 3, name:  'Who Gives a Split', league: 'Manic Monday Mixers', rank: 3},
    {id: 4, name:  'Rollin Stones', league: 'Manic Monday Mixers', rank: 4},
    {id: 5, name:  'Here for Beer', league: 'Manic Monday Mixers', rank: 5},
  ];

  constructor() { }

  getTeams() {
    return this.teams;
  }

  getTeamById(id) {
    return this.teams.find(team => team.id === Number(id));
  }

}
