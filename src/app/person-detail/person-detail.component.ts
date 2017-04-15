import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  private person: any = {};
  private movie: any = {};
  private movieCredits: Array<Object> = [];

  constructor(private injectedService: MyMovieContentsService, private route: ActivatedRoute) { }

  ngOnInit() {



    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getPersonDetails(id))
      .subscribe(result => this.person = result);

    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getPersonMovieCredits(id))
      .subscribe(response => this.movieCredits = response.results);

    this.route.params
      .map(params => params['id'])
      .subscribe(() => { this.injectedService.setSharedSearchResultPeople([]); window.scrollTo(0, 0); });

    this.injectedService.setSharedSearchResultPeople([]);

    // Trying to get moviecredits to fill up "Appears in part"

    // this.route.params
    //   .map(params => params['id'])
    //   .switchMap(id => this.injectedService.getMovieDetails(id))
    //   .subscribe(result => this.movie = result);

    // this.route.params
    //   .map(params => params['id'])
    //   .subscribe(() => { this.injectedService.setSharedSearchResultMovie([]); window.scrollTo(0, 0); });

    // this.injectedService.setSharedSearchResultMovie([]);
  }

}
