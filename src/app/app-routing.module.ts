import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './movies/home-page/home-page.component';
import { SearchPageComponent } from './movies/search-page/search-page.component';
import { DetailPageComponent } from './movies/detail-page/detail-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'details/:id', component: DetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
