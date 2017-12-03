import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule }  from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppUiModule } from './app-ui/app-ui.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StatsModule } from './stats/stats.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail.component';
import { TeamService } from './teams/team.service';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AppUiModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ProfileModule,
    DashboardModule,
    StatsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [ AppUiModule ],
  declarations: [
    AppComponent,
    MessagesComponent,
    TeamsComponent,
    TeamDetailComponent,
    PlayersComponent,
    PlayerComponent,
    GamesComponent,
    GameComponent ],
  bootstrap: [ AppComponent ],
  providers: [TeamService, MessageService]
})
export class AppModule {}
