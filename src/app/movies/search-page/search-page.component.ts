import { Component, OnInit } from '@angular/core';
import { OMDBSerivceService } from '../service/omdbserivce.service';

import { SearchData } from '../model/search-data';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public movies: SearchData = {
    Search: [],
    totalResults: '',
    Response: ''
  };
  constructor(private movieService: OMDBSerivceService) { }

  ngOnInit(): void {
    this.movieService.searchMovie('Hit Man').subscribe((data) => this.movies = data);
  }

}
