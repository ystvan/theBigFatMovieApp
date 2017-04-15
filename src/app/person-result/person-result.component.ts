import { Component, OnInit } from '@angular/core';
import { MyMovieContentsService } from '../my-movie-contents.service';

@Component({
  selector: 'app-person-result',
  templateUrl: './person-result.component.html',
  styleUrls: ['./person-result.component.css']
})
export class PersonResultComponent implements OnInit {

  constructor(private injectedService: MyMovieContentsService) { }

  ngOnInit() {
  }
  public removeSearchResults() {
    this.injectedService.setSharedSearchResultPeople([]);
  }

}
