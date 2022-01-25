import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => (this.films = films));
  }

  deleteFilm(film: Film) {
    this.filmService
      .deleteFilm(film)
      .subscribe(
        () => (this.films = this.films.filter((t) => t.id !== film.id))
      );
  }
  addFilm(film: Film) {
    this.filmService.addFilm(film).subscribe((film) => this.films.push(film));
  }

  editFilm(film: Film) {
    console.log(film);
    this.deleteFilm(film);
    this.addFilm(film);
    //this.filmService.addFilm(film).subscribe((film) => this.films.push(film));
  }
}

