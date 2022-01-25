import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './components/button/button.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { AboutComponent } from './components/about/about.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { AddShowComponent } from './components/add-show/add-show.component';


const appRoutes: Routes = [
  {
    path: ' ', component: FilmsComponent
  },
  {path: 'about', component: AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FilmsComponent,
    FilmItemComponent,
    AddFilmComponent,
    AboutComponent,
    RoomItemComponent,
    RoomsComponent,
    AddRoomComponent,
    ShowsComponent,
    ShowItemComponent,
    AddShowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
