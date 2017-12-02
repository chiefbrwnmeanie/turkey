import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';
import { PieChartComponent } from './pie-chart.component';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartistModule,
  ],
  exports: [
    ChartistModule,
    PieChartComponent,
    BarChartComponent
  ],
  declarations: [ PieChartComponent, BarChartComponent ]
})
export class AppChartsModule { }
