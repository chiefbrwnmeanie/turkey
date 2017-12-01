import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui/app-ui.module';

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
    DashboardModule
  ],
  exports: [ AppUiModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule {}
