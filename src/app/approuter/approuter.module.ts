import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesMainComponent } from '../movies-main/movies-main.component';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';
import { PersonMainComponent } from '../person-main/person-main.component';
import { PersonDetailComponent } from '../person-detail/person-detail.component';

//Adding all path-specifications, ideas from: http://heho-easj.dk/HTML5&JSF2017/Exercise8-Angular-Routing.html
const AppRoutes: Routes = [
  { path: 'movies-main', component: MoviesMainComponent }, 
  { path: 'movie/:id', component: MoviesDetailComponent }, 
  { path: 'person-main', component: PersonMainComponent }, 
  { path: 'person/:id', component: PersonDetailComponent },
  { path: '', redirectTo: 'movies-main', pathMatch: 'full'}, 
  { path: '**', component: MoviesMainComponent} 
];


@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  exports: [ RouterModule ]
})
export class ApprouterModule { }
