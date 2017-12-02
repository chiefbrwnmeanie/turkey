import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppUiModule } from '../app-ui/app-ui.module';
import { IndividualStatsComponent } from '../stats/individual-stats.component';

describe('IndividualStatsComponent', () => {
  let component: IndividualStatsComponent;
  let fixture: ComponentFixture<IndividualStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppUiModule ],
      declarations: [ IndividualStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
