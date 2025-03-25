import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
