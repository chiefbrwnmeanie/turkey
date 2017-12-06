import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../../app.module';
import { AppUiModule } from '../../app-ui/app-ui.module';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MessageService} from '../../messages/message.service';
import { ActivatedRoute, ActivatedRouteStub, click, newEvent, Router, RouterStub } from '../testing';
import { PlayerService } from '../../players/player.service';
import { PlayerListComponent } from '../../players/player-list.component';
import {TeamService} from '../../teams/team.service';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule, AppUiModule ],
      declarations: [ PlayerListComponent ],
      providers: [ TeamService, PlayerService, MessageService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router,         useClass: RouterStub},
        { provide: TeamService,   useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    component.displayedColumns = ['name', 'teamAvg'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
