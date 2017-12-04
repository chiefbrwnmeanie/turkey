import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppUiModule } from '../../app-ui/app-ui.module';
import { TeamStatsComponent } from '../../stats/team-stats.component';

describe('TeamStatsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppUiModule ],
      declarations: [ TeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
