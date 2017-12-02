import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppUiModule } from '../app-ui/app-ui.module';
import { AppChartsModule } from '../app-ui/charts/app-charts.module';
import { BarChartComponent } from '../app-ui/charts/bar-chart.component';
import { PieChartComponent } from '../app-ui/charts/pie-chart.component';


describe('ApppChartsModule', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  AppUiModule, AppChartsModule ],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
