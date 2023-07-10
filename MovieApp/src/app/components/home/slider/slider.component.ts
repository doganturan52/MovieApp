import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(public filmService: FilmService) {

  }

  ngOnInit(): void {     
    this.filmService.getTopTenFilms();
  }
}
