import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Room } from 'src/app/Room';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {

  @Input() room: Room;
  @Output() onDeleteRoom: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(room) {
    this.onDeleteRoom.emit(room);
  }

}
