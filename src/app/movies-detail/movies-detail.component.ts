import { Component, OnInit, OnChanges } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  private similarMovies: Array<Object> = [];
  private movie: any = {};

  constructor(private injectedService: MyMovieContentsService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getMovieDetails(id))
      .subscribe(result => this.movie = result);

    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getSimilarMovies(id))
      .subscribe(response => this.similarMovies = response.results);

    this.route.params
      .map(params => params['id'])
      .subscribe(() => {this.injectedService.setSharedSearchResultMovie([]); window.scrollTo(0,0);});

    this.injectedService.setSharedSearchResultMovie([]);
  }

}
