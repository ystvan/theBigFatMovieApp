import { TestBed, inject } from '@angular/core/testing';

import { MyMovieContentsService } from './my-movie-contents.service';

describe('MyMovieContentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMovieContentsService]
    });
  });

  it('should ...', inject([MyMovieContentsService], (service: MyMovieContentsService) => {
    expect(service).toBeTruthy();
  }));
});
