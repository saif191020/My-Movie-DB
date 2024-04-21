import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyServiceService {
  apikey: string = '' // hardcode this or it will ask during run time. 

  constructor() { }

  getApiKey(): string {
    if (this.apikey) return this.apikey;
    else {
      let key = window.prompt('Enter your OMDB Api key') || 'none';
      return key
    }
  }
}
