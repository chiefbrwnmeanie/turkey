import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 1, name: 'Team Nice' },
      { id: 2, name: 'Team Awesome' },
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
