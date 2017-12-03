import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      { id: 1, name: 'Team Nice' },
      { id: 2, name: 'Team Awesome' },
    ];
    return {teams};
  }
}
