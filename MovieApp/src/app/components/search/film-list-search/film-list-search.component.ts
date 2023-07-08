import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list-search',
  templateUrl: './film-list-search.component.html',
  styleUrls: ['./film-list-search.component.scss']
})
export class FilmListSearchComponent implements OnInit {


  constructor(public filmService: FilmService) {

  }

  ngOnInit(): void {

  }
}