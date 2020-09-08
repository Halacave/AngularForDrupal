import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Film } from './film'; 

import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../environments/environment';
import { Observable, of, BehaviorSubject } from 'rxjs';




@Injectable()
export class FilmService {
  public mainUrl = environment.mainUrl;
  // public mainUrl = 'http://drupal.dd:8083'

  private noId = new BehaviorSubject<number>(0);
  defaultId = this.noId.asObservable();

  // public filmList = new BehaviorSubject ([]);
  // firstList = this.filmList.asObservable();

  private films = new BehaviorSubject([]);
  private filmList: Film[];


constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

//this newId function is getting the ID from the url of the view-film component. 
  newId(urlId) {
    this.noId.next(urlId);
    // console.log (urlId);
  }
//this filmCall function is filling the filmList array with an updated service. 
  // filmsCall(newFilms){
  //   this.filmList.next(newFilms);
  // }
  getFilms() {
      if (!this.filmList || this.filmList.length === 0) {
          this.initializeFilms();
      }
      return this.films.asObservable();
  }


  	initializeFilms(){
      const url = `${this.mainUrl}/films?_format=json`;
  	        // console.log (url);       
      const bla = this.http.get<Film[]>(url);
      // console.log(JSON.stringify(bla));    
      console.log(url)
      console.log(JSON.stringify(bla))
      const blaa = bla.subscribe (films => {               
                   this.films.next(films);
              });
              console.log(blaa)
      return blaa;
       
  	}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

