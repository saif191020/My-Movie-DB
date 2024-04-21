import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [
    DetailPageComponent,
    HomePageComponent,
    SearchPageComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
