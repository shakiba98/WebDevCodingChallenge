import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Artist } from '../models/artist.model';
import { Event } from '../models/event.model';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient){}


  getArtists(search: string) {
    const params = new HttpParams({
      fromObject: {
        app_id: 'abc'
      }
    });
   return this.httpClient.get(`https://rest.bandsintown.com/artists/${search}`, {params: params}).
       pipe(
          map((data: Artist[]) => {
            return data;
          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
       )
   }

   getEvents(search: string) {
     const params = new HttpParams({
       fromObject: {
         app_id: 'abc'
       }
     });
    return this.httpClient.get(`https://rest.bandsintown.com/artists/${search}/events`, {params: params}).
        pipe(
           map((data: Event[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

}
