import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyMovieContentsService {

  //organizing the GET request calls, splitting the queries into separate parts, so that the code is more readable
  private apiKey = '&api_key=46493737c929707fe41b0a82c38bd029';
  private baseUrl = 'http://api.themoviedb.org/3/';
  private movie = 'movie/';
  private person = 'person/';
  private sortByQueryAddon = '&sort_by=popularity.desc';

  //using JSONP (as in "JSON with Padding") to bypass cross-domain policies (CORS) in web browsers
  private jsonpCallback = '?callback=JSONP_CALLBACK';
  private sharedSearchResult: Array<Object> = [];

  constructor(private jsonp: Jsonp) {
    console.log('successful service')
  }



  public getSharedSearchResult() {
    return this.sharedSearchResult;
  }

  public setSharedSearchResult(searchResult) {
    this.sharedSearchResult = searchResult;
  }

  //=========================================================================================
  //Playing with the MOVIES :::: full documentation from https://developers.themoviedb.org/3/
  //=========================================================================================


  public sharedSearchMovies(searchQuery) {
    this.searchMovies(searchQuery)
      .subscribe(response => {
        console.log('sharedSearchMovies')
        console.log(response.results)
        this.sharedSearchResult = response.results;
      })
  }

  //https://developers.themoviedb.org/3/movies/get-now-playing
  public getNowPlayingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'now_playing' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-upcoming
  public getUpComingMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'upcoming' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-popular-movies
  public getPopularMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'popular' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-top-rated-movies
  public getTopRatedMovies() {
    return this.jsonp.get(this.baseUrl + this.movie + 'top_rated' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-similar-movies
  public getSimilarMovies(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + '/similar' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-movie-reviews
  public getMovieReviews(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + '/reviews' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/search/search-movies
  public searchMovies(query) {
    return this.jsonp.get(this.baseUrl + 'search/movie' + this.jsonpCallback + '&query=' + query + this.sortByQueryAddon + this.apiKey)
      .map(result => result.json())
  }

  //https://developers.themoviedb.org/3/movies/get-movie-details
  public getMovieDetails(id) {
    return this.jsonp.get(this.baseUrl + this.movie + id + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  //============================================================================================
  //Playing with the FILMSTARS :::: full documentation from https://developers.themoviedb.org/3/
  //============================================================================================


  //https://developers.themoviedb.org/3/people/get-popular-people
  public getPopularPeople() {
    return this.jsonp.get(this.baseUrl + this.person + 'popular' + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }

  // https://developers.themoviedb.org/3/people/get-latest-person
  public getLatestPerson() {
    return this.jsonp.get(this.baseUrl + this.person + 'latest' + this.jsonpCallback + this.apiKey)
  }

  //https://developers.themoviedb.org/3/people/get-person-details
  public getPersonDetails(id) {
    return this.jsonp.get(this.baseUrl + this.person + id + this.jsonpCallback + this.apiKey)
      .map(result => result.json())
  }


}
