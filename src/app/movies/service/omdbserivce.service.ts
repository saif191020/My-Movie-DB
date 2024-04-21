import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeyServiceService } from 'src/app/api-key-service.service';

import { HttpClient } from '@angular/common/http';
import { SearchData } from '../model/search-data';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class OMDBSerivceService {
  private url: string = 'https://www.omdbapi.com/'

  constructor(private apikey: ApiKeyServiceService, private httpClient: HttpClient) { }

  searchMovie(keyword: string): Observable<SearchData> {
    return this.httpClient.get<SearchData>(this.url + '?apikey=' + this.apikey.getApiKey() + "&s=" + keyword)
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.url + '?apikey=' + this.apikey.getApiKey() + "&t=" + id)
  }
}
