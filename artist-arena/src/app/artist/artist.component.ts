import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';
import {ApicallService} from '../services/apicall.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [ApicallService]
})
export class ArtistComponent implements OnInit {

  artists : Artist[];
  constructor(
    private httpClient: HttpClient,
    private apiService: ApicallService
  ) { }

  ngOnInit() {
    this.getArtistList();
  }

    getArtistList() {
    this.apiService
    .getArtists()
    .subscribe((data:any) => {
      console.log(data);
      this.artists = data.data;
    });

  }
}
