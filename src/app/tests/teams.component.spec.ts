import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from '../teams/team.service';
import { TeamsComponent } from '../teams/teams.component';
import { AppUiModule } from '../app-ui/app-ui.module';
import { MessageService } from '../messages/message.service';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppUiModule, HttpClientModule, RouterTestingModule ],
      declarations: [ TeamsComponent ],
      providers: [ TeamService, MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
