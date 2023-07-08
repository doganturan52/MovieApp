import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public filmId!: any;
  public film!: any;

  constructor(public filmService: FilmService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.filmId = params["id"];
    })
  }

  ngOnInit(): void {
    const films: Film[] = this.filmService.filmList;
    this.film =  films.find(film => film.id == this.filmId);
  }

}