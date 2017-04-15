import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';
import { ReviewComponent } from '../review/review.component';


@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.css'],
  providers: [ReviewComponent]
})
export class MoviesMainComponent implements OnInit {
  pageTitle: string = '';
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

    this.injectedService.setSharedSearchResultMovie([]);


  }

  // Implementing the search from the view

  searchMovies() {
    console.log('herehere');
    this.injectedService.searchMovies(this.searchQuery)
      .subscribe(response => {
        this.injectedService.setSharedSearchResultMovie(response.results);
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

  onRatingClicked(message: string): void {
    console.log('clicked!');
    this.pageTitle = 'Movie list: ' + message;
  }

}


