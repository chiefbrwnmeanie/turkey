import { Component, OnInit } from '@angular/core';
import { Chart} from './chart';

declare var require: any;
// todo: write service to provide data to chart components
const data: any = require('../../../assets/charts-data.json');

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  chart: Chart;
  constructor() {
    this.chart =  {
      type: 'Pie',
      data: data['Pie'],
      options: {
        donut: true,
        showLabel: true
      }
    };
  }
  ngOnInit() {

  }
}
