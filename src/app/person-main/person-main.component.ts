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
  

  searchQuery: string;
  autocompletePeople: Array<Object> = [];

  constructor(private injectedService: MyMovieContentsService) { }

  ngOnInit() {


    // ideas mostly based on/from ::: http://heho-easj.dk/HTML5&JSF2017/Exercise9-Angular-HttpService.html
    // using the service's methods for calling the API


    // first to populate the main page with top-fancy filmstars :::

    this.injectedService.getPopularPeople()
      .subscribe(response => { 
        console.log('stepping into service call');
        this.popularPeople = response.results; 
      })
   
    this.injectedService.setSharedSearchResultPeople([]);

  }

  // Implementing the search from the view

  searchPeople() {
    console.log('stepping into');
    this.injectedService.searchPeople(this.searchQuery)
      .subscribe(response => {
        console.log('getting the jsonps');
        this.injectedService.setSharedSearchResultPeople(response.results);
      })
  }

// the drop down list, used for autocomplete after 3 characters with the matching criteria
 
  autocompleteSearchPeople() {
    if (this.searchQuery.length > 2) {
      console.log('into autocomplete');
      this.injectedService.searchPeople(this.searchQuery).subscribe(response => { 
        console.log('inside subsribe');
        this.autocompletePeople = response.results; 
      })
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
