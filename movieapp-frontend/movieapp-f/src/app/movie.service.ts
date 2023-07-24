import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private moviesUrl = 'http://localhost:8000/movies';  // URL to web api

  constructor(private http: HttpClient) { }

  // Get all movies
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.moviesUrl}`);
  }

  // Get movie by id
  getMovie(id: string): Observable<any> {
    const url = `${this.moviesUrl}/get/${id}`;
    return this.http.get<any>(url);
  }

  // Add movie
  addMovie(movie: any) { 
    return this.http.post<any>(this.moviesUrl + '/movies', movie);
  }
  

  // Update movie
  updateMovie(id: string, movie: any): Observable<any> {
    const url = `${this.moviesUrl}/update/${id}`;
    return this.http.put<any>(url, movie, httpOptions);
  }

  // Delete movie
  deleteMovie(id: string): Observable<any> {
    const url = `${this.moviesUrl}/delete/${id}`;
    return this.http.delete<any>(url, httpOptions);
  }
}
