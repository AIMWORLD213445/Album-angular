import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <album-list [childAlbumList]="masterAlbumList"
    (clickSender)="showDetails($event)"></album-list>
    <edit-album [childSelectedAlbum]="selectedAlbum"
    (doneClickedSender)="finishedEditing()"></edit-album>
    <new-album (newAlbumSender) ="addAlbum($event)"></new-album> </div>
    `
})

export class AppComponent {
  public masterAlbumList: Album[] =[
    new Album("A Blaze in the Northern Sky", "Dark THrone", 12, "Black Metal"),
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
}
