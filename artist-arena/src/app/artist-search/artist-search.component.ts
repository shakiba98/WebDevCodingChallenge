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

  //artist: new Artist;
  constructor(
    private httpClient: HttpClient,
    private apiService: ApicallService
  ) { }

  ngOnInit():void{

  }

    searchArtist(Search_input){
     this.search = Search_input;
     this.clearLists();
     this.getArtistList();
     this.getEventList();
 }


    getArtistList() {
    this.apiService
    .getArtists(this.search)
    .subscribe((data:any) => {
    this.artists.push(data);
    });

  }

    getEventList() {
    this.apiService
    .getEvents(this.search)
    .subscribe((data:any) => {
    this.events.push(data);
    });

  }

    clearLists(){
    this.artists = [];
    this.events = [];
    }

}
