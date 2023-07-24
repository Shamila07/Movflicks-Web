import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovietableService {
  private baseURL = 'http://localhost:8000/movies';
  constructor( private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseURL);
  }
}
