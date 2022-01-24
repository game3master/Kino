import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Film} from '../../Film'
import { StringLiteralLike } from 'typescript';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  @Output() onAddFilm: EventEmitter<Film> = new EventEmitter();
  name: string;
  day: string;
  room: number;
  id: number;
  isAvaiable: boolean;
  showAddFilm: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService) { this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddFilm = value)); }

  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  onSubmit() {
    if(!this.name){
      alert('Please add a name');
      return;
    }
    const newFilm = {
      name: this.name,
      day: this.day,
      room: this.room,
      isAvaiable: this.isAvaiable
    }

    this.onAddFilm.emit(newFilm);

    this.name = ""; 
    this.day = "";
    this.room = 0;
    this.isAvaiable = false;
  }
}
