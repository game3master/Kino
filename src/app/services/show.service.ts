import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Show} from '../Show'
import { HtmlParser } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private apiUrl = 'http://localhost:5000/shows'

  constructor(private http:HttpClient) { }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }
  deleteShow(show: Show): Observable<Show> {
    const url = `${this.apiUrl}/${show.id}`;
    return this.http.delete<Show>(url);
  }
  addShow(show: Show): Observable<Show>{
    return this.http.post<Show>(this.apiUrl, show, httpOptions);
  }
}
