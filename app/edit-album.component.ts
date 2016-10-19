import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'edit-album',
  template: `
  <div *ngIf="childSelectedAlbum">
    <h1> Edit Album </h1>
    <div>
      <label> Enter Album Name</label>
      <input [(ngModel)]="childSelectedAlbum.name">
    </div>
    <div>
      <label> Enter Album Artist</label>
      <input [(ngModel)]="childSelectedAlbum.artist">
    </div>
    <div>
      <label> Enter Album Price</label>
      <input [(ngModel)]="childSelectedAlbum.price">
    </div>
    <div>
      <label> Enter Album Genre</label>
      <input [(ngModel)]="childSelectedAlbum.genre">
      <button (click) = "doneClicked()"> Done</button>
    </div>
  </div>
  `
})

export class EditAlbumComponent {
  @Input() childSelectedAlbum: Album;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
}}
