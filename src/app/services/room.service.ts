import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Room} from '../Room'
import { HtmlParser } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:5000/rooms'


  constructor(private http:HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
  deleteRoom(room: Room): Observable<Room> {
    const url = `${this.apiUrl}/${room.id}`;
    return this.http.delete<Room>(url);
  }
  addRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(this.apiUrl, room, httpOptions);
  }

}
