import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUiModule} from '../app-ui/app-ui.module';

import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats.component';

@NgModule({
  imports: [
    CommonModule,
    AppUiModule
  ],
  exports: [
    AppUiModule
  ],
  declarations: [
    DashboardComponent,
    StatsComponent
  ]
})
export class DashboardModule { }
