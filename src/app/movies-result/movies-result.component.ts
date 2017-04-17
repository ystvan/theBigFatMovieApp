import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';

@Component({
  selector: 'app-movies-result',
  templateUrl: './movies-result.component.html',
  styleUrls: ['./movies-result.component.css']
})
export class MoviesResultComponent implements OnInit {

  constructor(public injectedService: MyMovieContentsService) { }

  ngOnInit() {
  }

  public removeSearchResults() {
    this.injectedService.setSharedSearchResultMovie([]);
  }

}
