import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Film} from '../Film'
import { HtmlParser } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://localhost:5000/films'

  constructor(private http:HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }
  deleteFilm(film: Film): Observable<Film> {
    const url = `${this.apiUrl}/${film.id}`;
    return this.http.delete<Film>(url);
  }
  addFilm(film: Film): Observable<Film>{
    return this.http.post<Film>(this.apiUrl, film, httpOptions);
  }
}
