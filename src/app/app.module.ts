import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppUiModule } from './app-ui/app-ui.module';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StatsModule } from './stats/stats.module';


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
    StatsModule
  ],
  exports: [ AppUiModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule {}
