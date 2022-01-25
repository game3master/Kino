import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Room} from '../../Room'
import { StringLiteralLike } from 'typescript';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
//import { SpawnSyncReturns } from 'child_process';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  @Output() onAddRoom: EventEmitter<Room> = new EventEmitter();
  id: number;
  space: number;
  showAddRoom: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService) { this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddRoom = value)); }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  onSubmit() {
    if(!this.id){
      alert('Please add id!');
      return;
    }
    const newRoom = {
      id: this.id,
      space: this.space
    }

    this.onAddRoom.emit(newRoom);

    this.id = 0; 
    this.space = 0;
  } 
}
