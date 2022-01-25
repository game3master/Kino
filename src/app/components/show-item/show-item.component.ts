import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from '../../Show';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {
  @Input() show: Show;
  @Output() onDeleteShow: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(show) {
    this.onDeleteShow.emit(show);
  }
}
