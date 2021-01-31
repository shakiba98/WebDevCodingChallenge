import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';
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
  search: string = ""

  //artist: new Artist;
  constructor(
    private httpClient: HttpClient,
    private apiService: ApicallService
  ) { }

  ngOnInit() {
    this.getArtistList();
  }


    getArtistList() {
    this.apiService
    .getArtists(this.search)
    .subscribe((data:any) => {
      console.log(data);
      this.artists.push(data);

    });

  }

  myFunc(Search_input){
   this.search = Search_input;
   this.artists =[];
   this.getArtistList();
 }

  }
