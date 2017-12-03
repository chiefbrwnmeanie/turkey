import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TeamStatsComponent} from './stats/team-stats.component';
import {IndividualStatsComponent} from './stats/individual-stats.component';
import {TeamsComponent} from './teams/teams.component';
import {TeamDetailComponent} from './teams/team-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'teams', component: TeamsComponent},
  { path: 'teams/detail/:id', component: TeamDetailComponent },
  { path: 'team-stats', component: TeamStatsComponent},
  { path: 'individual-stats', component: IndividualStatsComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
