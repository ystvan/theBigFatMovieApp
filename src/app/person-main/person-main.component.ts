import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';

@Component({
  selector: 'app-person-main',
  templateUrl: './person-main.component.html',
  styleUrls: ['./person-main.component.css']
})
export class PersonMainComponent implements OnInit {
  pageTitle: string = '';

  popularPeople: Array<Object>;
  latestPeople: Array<Object>;

  searchQuery: string;
  autocompletePeople: Array<Object> = [];

  constructor(private injectedService: MyMovieContentsService) { }

  ngOnInit() {


    // ideas mostly based on/from ::: http://heho-easj.dk/HTML5&JSF2017/Exercise9-Angular-HttpService.html
    // using the service's methods for calling the API


    // first to populate the main page with top-fancy filmstars :::

    this.injectedService.getPopularPeople()
      .subscribe(response => { this.popularPeople = response.results; })

    this.injectedService.getLatestPerson()
      .subscribe(response => { this.latestPeople = response.results; })

    this.injectedService.setSharedSearchResult([]);

  }

  // Implementing the search from the view

  searchPeople() {
    this.injectedService.searchPeople(this.searchQuery)
      .subscribe(response => {
        this.injectedService.setSharedSearchResult(response.results);
      })
  }

  autocompleteSearchPeople() {
    if (this.searchQuery.length > 2) {
      this.injectedService.searchPeople(this.searchQuery).subscribe(response => { this.autocompletePeople = response.results; })
    } else {
      this.autocompletePeople = [];
    }
  }

  select(person) {
    this.searchQuery = person;
    this.autocompletePeople = [];
  }

  onRatingClicked(message: string): void {
    console.log('clicked!');
    this.pageTitle = 'Movie list: ' + message;
  }

}
