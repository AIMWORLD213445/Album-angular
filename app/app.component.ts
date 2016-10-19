import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container" style="background:url(http://blog.thecurrent.org/files/2015/04/3031745-poster-p-1-3031745-hit-the-ground-running-how-an-iconic-indie-record-store-stays-relevant-in-the-itunes-era.jpg);">
    <h1>Ye Old Record Shoppe</h1>
    <div id="albumList">
      <album-list [childAlbumList]="masterAlbumList"
      (clickSender)="showDetails($event)"></album-list>
      <edit-album [childSelectedAlbum]="selectedAlbum"
      (doneClickedSender)="finishedEditing()">
      </edit-album>
      <new-album (newAlbumSender) ="addAlbum($event)"></new-album>
    </div>
  </div>
    `
})

export class AppComponent {
  public masterAlbumList: Album[] =[
    new Album("A Blaze in the Northern Sky", "Dark Throne", 12, "Black Metal"),
    new Album("Reign in Blood", "Slayer", 10, "Thrash Metal"),
    new Album("Paranoid", "Black Sabbath", 11, "Classic Rock"),
    new Album("Ride the Lightning", "Metallica", 12, "Thrash Metal"),
  ]
  selectedAlbum: Album = null;
  showDetails(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }
  finishedEditing() {
    this.selectedAlbum = null;
  }
  addAlbum(newAlbumFromChild: Album) {
    this.masterAlbumList.push(newAlbumFromChild);
  }
  buyAlbum(currentAlbum) {
   currentAlbum.total += currentAlbum.price;

  }
}
