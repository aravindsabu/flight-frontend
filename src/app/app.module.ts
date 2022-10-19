import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewallflightComponent } from './viewallflight/viewallflight.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"done",component:ViewallflightComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent,
    ViewallflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
