import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddFilm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toggleAddFilm(): void{
    this.showAddFilm = !this.showAddFilm;
    this.subject.next(this.showAddFilm)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
