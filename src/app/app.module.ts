import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyMovieContentsService } from './my-movie-contents.service';

import { AppComponent } from './app.component';
import { MoviesMainComponent } from './movies-main/movies-main.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesResultComponent } from './movies-result/movies-result.component';
import { PersonMainComponent } from './person-main/person-main.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonResultComponent } from './person-result/person-result.component';

import { ApprouterModule } from './approuter/approuter.module';
import { FilterPipe } from './filter.pipe';
import { ReviewComponent } from './review/review.component';
import { ReviewDirective } from './review.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesMainComponent,
    MoviesDetailComponent,
    MoviesResultComponent,
    PersonMainComponent,
    PersonDetailComponent,
    PersonResultComponent,
    FilterPipe,
    ReviewComponent,
    ReviewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ApprouterModule
  ],
  providers: [MyMovieContentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
