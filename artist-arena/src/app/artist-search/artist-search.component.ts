import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';
import { Event } from '../models/event.model';
import { ApicallService } from '../services/apicall.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
  providers: [ApicallService]
})

export class ArtistSearchComponent implements OnInit {
  artists : Array<Artist> = [];
  events: Array<Event> = [];
  search: string = "";

  constructor(
    private httpClient: HttpClient,
    private apiService: ApicallService
  ) { }

  ngOnInit():void{

  }

  //This method takes the input text from Search and gets the relevant Artists and Events

    searchArtist (Search_input) {
     this.search = Search_input;
     this.clearLists();
     this.getArtistList();
     this.getEventList();
   }

   //This method is used to get the Artists information from the API using the ApicallService


    getArtistList() {
    this.apiService
    .getArtists(this.search)
    .subscribe((data:any) => {
    this.artists.push(data);
    });

  }

    //This method is used to get the Events information from the API using the ApicallService

    getEventList() {
    this.apiService
    .getEvents(this.search)
    .subscribe((data:any) => {
    this.events.push(data);
    });

  }

    //This method is used to Clear the lists for a new search

    clearLists(){
    this.artists = [];
    this.events = [];
    }

}
