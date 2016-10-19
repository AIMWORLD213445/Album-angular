import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show all albums</option>
    <option value="bought">Show albums in shopping cart</option>
    <option value="notBought">Show albums not on your shopping list</option>
  </select>
  <div *ngFor = "let currentAlbum of childAlbumList | buy:selectedPurchased">
    <h3>{{ currentAlbum.name }} </h3> <h4>{{ currentAlbum.artist}} </h4> <h4>{{ currentAlbum.price }}</h4> <h4> {{currentAlbum.genre }}</h4>
    <album-display [album]="currentAlbum"></album-display>
    <button (click) = "editButtonHasBeenClicked(currentAlbum)"> Edit</button>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() clickSender =  new EventEmitter();
  public selectedPurchased: string = "all";
  onChange(optionFromMenu) {
    this.selectedPurchased = optionFromMenu;
  }

  editButtonHasBeenClicked(albumToEdit: Album) {
    this.clickSender.emit(albumToEdit);
  }
}
