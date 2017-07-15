import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// services
import { SpotifyService } from './services/spotify.service';

// components
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TrackListComponent } from './track-list/track-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    SearchResultsComponent,
    TrackComponent,
    TrackListComponent,
    AlbumListComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
