import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from '../../players/player.service';
import { TeamService } from '../../teams/team.service';
import { MessageService} from '../../messages/message.service';
import {Team} from '../../teams/team';


describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ PlayerService, MessageService, TeamService ]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
