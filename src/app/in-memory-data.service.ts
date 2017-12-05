import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: 1, name:  'We\'re on Strike', league: 'Manic Monday Mixers', rank: 1},
      {id: 2, name:  'Happy Rollers', league: 'Manic Monday Mixers', rank: 2},
      {id: 3, name:  'Who Gives a Split', league: 'Manic Monday Mixers', rank: 3},
      {id: 4, name:  'Rollin Stones', league: 'Manic Monday Mixers', rank: 4},
      {id: 5, name:  'Here for Beer', league: 'Manic Monday Mixers', rank: 5},
    ];
    const players = [
      {id: 1, name: 'John',  teamId: 1},
      {id: 2, name: 'Sue',  teamId: 2},
      {id: 3, name: 'Pam',  teamId: 3},
      {id: 4, name: 'Paul', teamId: 4},
      {id: 5, name: 'James', teamId: 5},
    ];
    return {teams, players};
  }
}
