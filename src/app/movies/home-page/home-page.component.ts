import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.movieService.searchMovie('test').subscribe((data) => { console.log(data) })
  }
  data = { "Title": "Hit Man", "Year": "1972", "Rated": "R", "Released": "20 Dec 1972", "Runtime": "90 min", "Genre": "Crime, Drama", "Director": "George Armitage", "Writer": "Ted Lewis, George Armitage", "Actors": "Bernie Casey, Pam Grier, Lisa Moore", "Plot": "An ex-cop discovers that his brother's recent death is intertwined with both the Los Angeles underworld and the city's porno movie scene.", "Language": "English", "Country": "United States", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BZDgwY2NiOWEtYzYxOS00ODk4LWJkMTEtMjNiMWUzNWFmMTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.7/10" }], "Metascore": "N/A", "imdbRating": "5.7", "imdbVotes": "1,067", "imdbID": "tt0068704", "Type": "movie", "DVD": "04 May 2010", "BoxOffice": "$1,060,982", "Production": "Unknown", "Website": "N/A", "Response": "True" }

}
