import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.css']
})
export class MoviesMainComponent implements OnInit {

  nowPlayingMovies: Array<Object>;
  upComingMovies: Array<Object>;
  popularMovies: Array<Object>;
  topRatedMovies: Array<Object>;

  searchQuery: string;
  autocompleteMovies: Array<Object> = [];


  constructor(private injectedService: MyMovieContentsService) { }

  ngOnInit() {
  }

}
