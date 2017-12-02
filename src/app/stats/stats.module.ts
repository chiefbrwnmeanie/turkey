import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUiModule} from '../app-ui/app-ui.module';
import { TeamStatsComponent } from './team-stats.component';
import { IndividualStatsComponent } from './individual-stats.component';

@NgModule({
  imports: [
    CommonModule,
    AppUiModule
  ],
  exports: [
    AppUiModule
  ],
  declarations: [TeamStatsComponent, IndividualStatsComponent]
})
export class StatsModule { }
