import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import {RegisterComponent} from './Pages/register/register.component';
import {DashboardComponent} from './Pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/dashboard/home/home.component';
import { ProfileComponent } from './Pages/dashboard/profile/profile.component';
import { ApplicationComponent } from './Pages/dashboard/application/application.component';
import { DashboardHeaderComponent } from './Components/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    ApplicationComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
