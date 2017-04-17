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
  public person: any = {};
  public movie: any = {};
  public movieCredits: Array<Object> = [];

  constructor(private injectedService: MyMovieContentsService, private route: ActivatedRoute) { }

  ngOnInit() {



    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getPersonDetails(id))
      .subscribe(result => this.person = result);

    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.injectedService.getPersonMovieCredits(id))
      .subscribe(response => this.movieCredits = response.cast);

    this.route.params
      .map(params => params['id'])
      .subscribe(() => { this.injectedService.setSharedSearchResultPeople([]); window.scrollTo(0, 0); });

    this.injectedService.setSharedSearchResultPeople([]);

  }

}
