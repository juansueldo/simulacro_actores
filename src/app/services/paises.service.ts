import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  URL_API = 'https://restcountries.com/v3.1';
  constructor() { }
  getPaises(){
    const data = fetch(`${this.URL_API}/region/america?fields=name,flags`).then(data => data.json());
    return data;
  }
}
