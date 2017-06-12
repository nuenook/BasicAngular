import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './http-service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './Service/hero.service';
import { DashboardComponent } from './Dashboard/hero-dashboard.component';
import { AppRoutingModule } from './routing/app-routing.module'; 

import { RouterModule } from '@angular/router';

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations:
  [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent, 
  ],
  providers:
  [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
