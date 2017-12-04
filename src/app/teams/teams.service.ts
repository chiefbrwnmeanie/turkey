import { Injectable } from '@angular/core';
import { Team } from '../teams/team';

@Injectable()
export class TeamsService {
  private teams: Team[] = [
    {id: 1, name:  'Team 1'},
    {id: 2, name:  'Team 2'}
  ];

  constructor() { }

  getTeams() {
    return this.teams;
  }

  getTeamById(id) {
    return this.teams.find(team => team.id === Number(id));
  }
}
