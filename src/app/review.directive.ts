import { Directive, OnChanges } from '@angular/core';

@Directive({
  selector: '[appReview]'
})
export class ReviewDirective implements OnChanges {
  rating: number = 4;
  reviewWidth: number; //calculated on Change

  ngOnChanges(): void {
    this.reviewWidth = this.rating * 86 / 5;
  }
}
