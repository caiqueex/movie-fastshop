import { StorageService } from '../storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule, Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';

bootstrap4Mode();
declare var $: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movies;
  movieDetails = {};
  imgBaseUrl: string;
  posterUrl: string;
  display = false;
  displayButton = 'Mostrar detalhes';
  clicked;

  constructor(
    private storage: StorageService,
    public modal: Modal
  ) { }

  ngOnInit() {
    if (this.movies.poster_path === null) {
      this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.imgBaseUrl = this.storage.getImageBaseUrl()
      this.posterUrl = this.imgBaseUrl + 'w154' + this.movies.poster_path;
    }
  }
  // clicado(movie){
  //   alert(movie.overview)



    
  // }

  clicado(movie) {
    console.log(movie)
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title(movie.title)
        .body(`

            <b>Descrição:</b>
            <p>${movie.overview}</p>`)
        .open();

  }

  reciverFeedback(resposta) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', resposta);
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
