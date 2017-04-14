import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnChanges {
  @Input()rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  reviewWidth: number; //calculated on Change

  ngOnChanges(): void {
    this.reviewWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`This movie got a rating of ${this.rating}`);
  }
}
