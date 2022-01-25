import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Show} from '../../Show'
import { StringLiteralLike } from 'typescript';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  @Output() onAddShow: EventEmitter<Show> = new EventEmitter();
    id?: number;
    name: string;
    date:string;
    hour: string;
    room: number;
    ticketSold: number;
    ticket: number;
  showAddShow: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService) { this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddShow = value)); }

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
    const newShow = {
      id: this.id,
      name: this.name,
      date: this.date,
      hour: this.hour,
      room: this.room,
      ticketSold: this.ticketSold,
      ticket: this.ticket
    }

    this.onAddShow.emit(newShow);

    this.id = 0;
    this.name = "";
    this.date = "";
    this.hour = "";
    this.room = 0;
    this.ticketSold = 0;
    this.ticket = 0;
  }
}