import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Room';
import { ROOMS } from 'src/app/mock-room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms)=> this.rooms);  
  }
  deleteRoom(room: Room){
    this.roomService.deleteRoom(room).subscribe(()=>this.rooms = this.rooms.filter(t => t.id !== room.id));
  }
  addRoom(room: Room){
    this.roomService.addRoom(room).subscribe((room) => (this.rooms.push(room)));
  }

}
