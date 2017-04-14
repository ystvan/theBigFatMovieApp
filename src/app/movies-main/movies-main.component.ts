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


    // ideas mostly based on/from ::: http://heho-easj.dk/HTML5&JSF2017/Exercise9-Angular-HttpService.html
    // using the service's methods for calling the API


    // first to populate the main page with top-fancy movies :::

    this.injectedService.getNowPlayingMovies()
      .subscribe(response => { this.nowPlayingMovies = response.results; })


    this.injectedService.getUpComingMovies()
      .subscribe(response => { this.upComingMovies = response.results; })

    this.injectedService.getPopularMovies()
      .subscribe(response => { this.popularMovies = response.results; })

    this.injectedService.getTopRatedMovies()
      .subscribe(response => { this.topRatedMovies = response.results; })

    this.injectedService.setSharedSearchResult([]);


  }

  // Implementing the search from the view

  searchMovies() {
    this.injectedService.searchMovies(this.searchQuery)
      .subscribe(response => {
        this.injectedService.setSharedSearchResult(response.results);
      })
  }

  autocompleteSearchMovies() {
    if (this.searchQuery.length > 2) {
      this.injectedService.searchMovies(this.searchQuery).subscribe(response => { this.autocompleteMovies = response.results; })
    } else {
      this.autocompleteMovies = [];
    }
  }

  select(movie) {
    this.searchQuery = movie;
    this.autocompleteMovies = [];
  }


}


