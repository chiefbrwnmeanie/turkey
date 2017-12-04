import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeamStatsComponent} from './stats/team-stats.component';
import {IndividualStatsComponent} from './stats/individual-stats.component';
import {TeamsComponent} from './teams/teams.component';
import {TeamListComponent} from './teams/team-list.component';
import {TeamDetailComponent} from './teams/team-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsComponent, children: [
      { path: 'teams-list', component: TeamListComponent, outlet: 'list', pathMatch: 'full' },
      { path: ':id', component: TeamDetailComponent, outlet: 'detail', pathMatch: 'full' }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
