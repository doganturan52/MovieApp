import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import { FilmResponse } from '../models/film-response';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzI0MjRhYmMxMjVhNDVkNzY3MmFkMDkzY2I4YWJjNCIsInN1YiI6IjY0YTU0MmRmMWJmMjY2MDBjNzhhMWVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qpUPCl5sWnVxtdyTivOjL7wgbm8GM7tjhORBC8AtqwY ";
  filmList!: Film[];
  topTenFilmList!: Film[];
  filteredFilmList!: Film[];
  public watchList: any[] = [];

  constructor(private http: HttpClient) {

  }

  // For Slider
  getTopTenFilms(): void {
    this.http.get<FilmResponse>('https://api.themoviedb.org/3/trending/movie/day?api_key', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      this.topTenFilmList = filmResponse.results.slice(0, 10);
    })
  }

  // For Tabs
  getNowPlayingFilms(): void {
    this.http.get<FilmResponse>('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      this.filmList = filmResponse.results;
      this.filteredFilmList = filmResponse.results;
    })
  }

  getUpcomingFilms(): void {
    this.http.get<FilmResponse>('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      this.filmList = filmResponse.results;
    })
  }

  getTopRatedFilms(): void {
    this.http.get<FilmResponse>('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      this.filmList = filmResponse.results;
    })
  }

  getPopularFilms(): void {
    this.http.get<FilmResponse>('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      this.filmList = filmResponse.results;
    })
  }

  getFilmReviews(filmId: number): void {
    this.http.get<FilmResponse>(`https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer ' + this.apiKey
      }
    }).subscribe((filmResponse: FilmResponse) => {
      // this.filmList.find()
    })
  }

  // Watch List
  addFilmToWatchList(film: Film) {
    this.watchList.push(film);
    console.log("asdasfsaeqwrwq213");
  }

  deleteFilmToWatchList(film: Film) {
    const index = this.watchList.findIndex(item => item === film);
    if (index !== -1) {
      this.watchList.splice(index, 1);
      console.log(`"${film}" filmi izleme listesinden silindi.`);
    } else {
      console.log(`"${film}" filmi izleme listesinde bulunamadı.`);
    }
  }
}