import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppUiModule } from '../../app-ui/app-ui.module';
import { ActivatedRoute, ActivatedRouteStub, click, newEvent, Router, RouterStub } from '../testing';

import { Team} from '../../teams/team';
import { TeamsService } from '../../teams/teams.service';
import { TeamListComponent } from '../../teams/team-list.component';
import {MatTableDataSource} from '@angular/material';

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
      providers: [ TeamsService,
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router,         useClass: RouterStub},
        { provide: TeamsService,   useValue: {} }
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
