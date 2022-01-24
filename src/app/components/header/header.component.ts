import { Component, OnInit } from '@angular/core';
import {FILMS} from '../../mock-films'
import {Film} from '../../Film'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title: string = 'siema eniu';
    showAddFilm: boolean;
    subscription: Subscription;
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddFilm = value));
   }

  ngOnInit(): void {
  }

  toggleAddFilm() {
    this.uiService.toggleAddFilm();
  }
}
