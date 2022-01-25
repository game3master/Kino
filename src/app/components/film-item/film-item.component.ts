import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from '../../Film';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css'],
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Output() onDeleteFilm: EventEmitter<Film> = new EventEmitter();
  @Output() onEditFilm: EventEmitter<Film> = new EventEmitter();

  faTimes = faTimes;
  faPencil = faPencilAlt;
  showEditFilm = false;
  subscription: Subscription;
  private subject = new Subject<any>();

  name: string;
  day: string;
  room: number;
  id: number;
  isAvaiable: boolean;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showEditFilm = value));
  }

  ngOnInit(): void {}

  toggleEditFilm() {
    this.showEditFilm = !this.showEditFilm;
    this.subject.next(this.showEditFilm);
  }

  onDelete(film) {
    this.onDeleteFilm.emit(film);
  }

  onEdit(film) {
    if (!this.name) {
      alert('Please add a name');
      return;
    }
    const newFilm = {
      id: film.id,
      name: this.name ?? film.name ,
      day: this.day ?? film.day,
      room: this.room ?? film.room,
      isAvaiable: this.isAvaiable ?? film.isAvaiable
    };

    this.onEditFilm.emit(newFilm as Film);

    this.name = '';
    this.day = '';
    this.room = 0;
    this.isAvaiable = false;
  }
  
}
