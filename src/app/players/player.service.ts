import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    {id: 1, name: 'John',  team: 'We\'re on Strike'},
    {id: 2, name: 'Sue',  team: 'Happy Rollers'},
    {id: 3, name: 'Pam',  team: 'Who Gives a Split'},
    {id: 4, name: 'Paul', team: 'Rollin Stones'},
    {id: 5, name: 'James', team: 'Here for Beer'},
  ];

  constructor() { }

  getPlayers() {
    return this.players;
  }

  getPlayerById(id) {
    return this.players.find(player => player.id === Number(id));
  }
}
