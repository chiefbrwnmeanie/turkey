import { TestBed, inject } from '@angular/core/testing';
import { PlayerService } from '../../players/player.service';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  ],
      providers: [ PlayerService ]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
