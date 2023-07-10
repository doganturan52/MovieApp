import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {

  filmList!: Film[];

  constructor(public filmService: FilmService) {

  }

  ngOnInit(): void {
    this.filmList = this.filmService.watchList;
  }
  

  deleteFilmFromWatchList(film: Film)
  {
    this.filmService.deleteFilmToWatchList(film);
  }

}
