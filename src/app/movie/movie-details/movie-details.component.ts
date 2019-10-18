import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie;  

  filme;

  constructor(
    private storage: StorageService,
  ) { 
    
  }

  ngOnInit() {
    this.storage.getList(this.movie)
    .subscribe(
      (response) => {
        this.movie = response;
       }
    );
  }
}
