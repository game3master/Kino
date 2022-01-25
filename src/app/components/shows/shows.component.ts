import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../services/show.service'
import {Show} from '../../Show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];
  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.getShows().subscribe((shows)=> this.shows = shows);
  }

  deleteShow(show: Show){
    this.showService.deleteShow(show).subscribe(()=> this.shows = this.shows.filter(t => t.id !== show.id));
  }
  addShow(show: Show){
    this.showService.addShow(show).subscribe((show) => (this.shows.push(show)));
  }

  editShow(show: Show) {

  }
}
