import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from '../../Film';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Output() onDeleteFilm: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(film) {
    this.onDeleteFilm.emit(film);
  }
}
