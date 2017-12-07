import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { AppChartsModule } from './charts/app-charts.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AppMaterialModule,
    AppChartsModule
    ],
  declarations: [ ],
})
export class AppUiModule { }
