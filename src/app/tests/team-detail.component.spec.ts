import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppUiModule } from '../app-ui/app-ui.module';
import { TeamService } from '../teams//team.service';
import { TeamDetailComponent } from '../teams/team-detail.component';
import { MessageService } from '../messages/message.service';


describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppUiModule, RouterTestingModule, HttpClientModule ],
      declarations: [ TeamDetailComponent ],
      providers: [ TeamService, MessageService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
