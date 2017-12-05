import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {id: 1, name:  'We\'re on Strike', league: 'Manic Monday Mixers', rank: 1, pointsWon: 76, pointsLost: 50, winPerc: 71.0, teamAvg: 661, hdcp: 196 },
      {id: 2, name:  'Who Gives a Split', league: 'Manic Monday Mixers', rank: 2, pointsWon: 68, pointsLost: 39, winPerc: 61.3, teamAvg: 672, hdcp: 185},
      {id: 3, name:  'Rollin Stones', league: 'Manic Monday Mixers', rank: 3, pointsWon: 65, pointsLost: 49, winPerc: 53.2, teamAvg: 747, hdcp: 247},
      {id: 4, name:  'Here for Beer', league: 'Manic Monday Mixers', rank: 4, pointsWon: 57, pointsLost: 57, winPerc: 48.8, teamAvg: 553, hdcp: 292}
    ];
    const players = [
      {id: 1, name: 'Jim',  teamId: 1, avgScore: 148, hdcp: 64, pins: 2668, games: 18, pointsWon: 8, pointsLost: 10, winPerc: 44.4 },
      {id: 2, name: 'Robin',  teamId: 1, avgScore: 161, hdcp: 53, pins: 5822, games: 36, pointsWon: 22, pointsLost: 14, winPerc: 61.1 },
      {id: 3, name: 'Todd',  teamId: 1, avgScore: 170, hdcp: 45, pins: 6149, games: 36, pointsWon: 22, pointsLost: 14, winPerc: 61.1 },
      {id: 4, name: 'Melissa',  teamId: 1, avgScore: 182, hdcp: 34, pins: 6558, games: 36, pointsWon: 24, pointsLost: 12, winPerc: 67.7 },

      {id: 9, name: 'Edgar',  teamId: 2, avgScore: 124, hdcp: 86, pins: 3744, games: 30, pointsWon: 12, pointsLost: 17, winPerc: 41.2 },
      {id: 10, name: 'David',  teamId: 2, avgScore: 169, hdcp: 45, pins: 4578, games: 27, pointsWon: 20, pointsLost: 7, winPerc: 75.9 },
      {id: 11, name: 'Chris',  teamId: 2, avgScore: 172, hdcp: 43, pins: 3107, games: 18, pointsWon: 13, pointsLost: 8, winPerc: 61.9 },
      {id: 12, name: 'Stu',  teamId: 2, avgScore: 207, hdcp: 11, pins: 6833, games: 33, pointsWon: 23, pointsLost: 10, winPerc: 69.7 },

      {id: 13, name: 'Candy',  teamId: 3, avgScore: 165, hdcp: 49, pins: 5955, games: 36, pointsWon: 22, pointsLost: 14, winPerc: 61.1 },
      {id: 14, name: 'John',  teamId: 3, avgScore: 178, hdcp: 37, pins: 6438, games: 36, pointsWon: 20, pointsLost: 16, winPerc: 55.6 },
      {id: 15, name: 'Dennis',  teamId: 3, avgScore: 201, hdcp: 17, pins: 4845, games: 24, pointsWon: 12, pointsLost: 12, winPerc: 52.1 },
      {id: 16, name: 'Mike',  teamId: 3, avgScore: 203, hdcp: 15, pins: 3058, games: 15, pointsWon: 11, pointsLost: 7, winPerc: 61.1 },

      {id: 17, name: 'Diana',  teamId: 4, avgScore: 97, hdcp: 110, pins: 1462, games: 15, pointsWon: 4, pointsLost: 11, winPerc: 26.7 },
      {id: 18, name: 'Barb',  teamId: 4, avgScore: 145, hdcp: 67, pins: 5229, games: 36, pointsWon: 14, pointsLost: 22, winPerc: 38.9 },
      {id: 19, name: 'Jenn',  teamId: 4, avgScore: 154, hdcp: 59, pins: 4643, games: 30, pointsWon: 18, pointsLost: 12, winPerc: 61.7 },
      {id: 20, name: 'Ben',  teamId: 4, avgScore: 157, hdcp: 56, pins: 5200, games: 33, pointsWon: 21, pointsLost: 12, winPerc: 63.64 },

    ];

    const games = [
      { id: 1, name: 'Game 1a', lane: 1, teamIds: [1,2], teamNames: ['We\'re on Strike', 'Who Gives a Split'] },
      { id: 2, name: 'Game 1b', lane: 2, teamIds: [3,4], teamNames: ['Rollin Stones', 'Here for Beer'] }
    ]

    return {teams, players, games};
  }
}
