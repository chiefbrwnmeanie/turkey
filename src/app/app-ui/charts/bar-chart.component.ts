import { Component, OnInit } from '@angular/core';
import { Chart} from './chart';

declare var require: any;
// todo: write service to provide data to chart components
const data: any = require('../../../assets/charts-data.json');

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chart: Chart;
  constructor() {
    this.chart =  {
      type: 'Bar',
      data: data['Bar']
    };
  }

  ngOnInit() {
  }

}
