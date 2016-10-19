import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
  <div *ngFor = "let currentAlbum of childAlbumList">
    <h3>{{ currentAlbum.name }}</h3>
    <button (click) = "editButtonHasBeenClicked(currentAlbum)"> Edit</button>
  </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() clickSender =
  new EventEmitter();
  editButtonHasBeenClicked(albumToEdit: Album) {
    this.clickSender.emit(albumToEdit);
  }
}
