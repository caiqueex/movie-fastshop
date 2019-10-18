import { StorageService } from '../storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  movieDetails = {};
  imgBaseUrl: string;
  posterUrl: string;
  display = false;
  displayButton = 'Mostrar detalhes';
  clicked;

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit() {
    if (this.movie.poster_path === null) {
      this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.imgBaseUrl = this.storage.getImageBaseUrl()
      this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
    }
  }
  clicado(movie){
    this.clicked = null
    this.clicked = movie
  }

  changeButton() {
    this.display = !this.display;
    if (this.display === true) {
      this.displayButton = 'Ocultar detalhes';
    } else {
      this.displayButton = 'Mostrar detalhes';
    }
  }
}
