import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroAllComponent} from './hero-all.component'
import { HeroSelected } from './hero-selected.component'

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent, HeroAllComponent ,HeroSelected ],
  bootstrap:    [ AppComponent, HeroAllComponent ]
})
export class AppModule { }
