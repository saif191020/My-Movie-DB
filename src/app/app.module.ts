import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './movies/home-page/home-page.component';
import { SearchPageComponent } from './movies/search-page/search-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
