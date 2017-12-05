import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { AppChartsModule } from './charts/app-charts.module';
import {MatPaginator, MatPaginatorIntl} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppChartsModule,
  ],
  exports: [
    AppMaterialModule,
    AppChartsModule,
    MatPaginator
  ],
  declarations: [ MatPaginator ],
  providers: [ MatPaginatorIntl  ]
})
export class AppUiModule { }
