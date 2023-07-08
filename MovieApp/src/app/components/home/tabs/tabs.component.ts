import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit{

  activeTab: string = "nowPlaying";

  constructor(public filmService: FilmService) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showFilms(filmType: string): void {
    this.activeTab = filmType;

    switch(filmType)
    {
      case "nowPlaying": this.filmService.getNowPlayingFilms(); 
      break;

      case "upComing": this.filmService.getUpcomingFilms();
      break;

      case "topRated": this.filmService.getTopRatedFilms();
      break;

      case "popular": this.filmService.getPopularFilms();
      break;

      default: console.log("Geçersiz film türü !");
      break;
    }
  }

}