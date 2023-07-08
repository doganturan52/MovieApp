import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  constructor(public filmService: FilmService) {

  }

  ngOnInit(): void {
    this.filmService.getNowPlayingFilms();
  }
}
