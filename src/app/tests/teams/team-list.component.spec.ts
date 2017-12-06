import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppUiModule } from '../../app-ui/app-ui.module';
import { ActivatedRoute, ActivatedRouteStub, click, newEvent, Router, RouterStub } from '../testing';
import { Team} from '../../teams/team';
import { TeamService } from '../../teams/team.service';
import { TeamListComponent } from '../../teams/team-list.component';
import {MatTableDataSource} from '@angular/material';
import { PlayerService } from '../../players/player.service'
import { MessageService} from '../../messages/message.service';



describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppUiModule
         ],
      declarations: [ TeamListComponent ],
      providers: [ TeamService, PlayerService, MessageService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router,         useClass: RouterStub},
        { provide: TeamService,   useValue: {} }
      ]
    });
  }));

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    component.displayedColumns = ['rank', 'name', 'league'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
