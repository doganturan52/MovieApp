import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit{



  constructor(private filmService: FilmService) {
    
  }

  ngOnInit(): void {
    this.filmService.getNowPlayingFilms();
  }

  search(searchText: string): void {
    searchText = searchText.toLocaleLowerCase();
    this.filmService.filteredFilmList = this.filmService.filmList.filter((film: Film) => {
      return film.title.toLowerCase().indexOf(searchText) > -1;
    })
  }

}
