import { Component, Input} from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  template: `
  <div>
    <input *ngIf="album.bought === true" type="checkbox" checked (click)="toggleBought(false)"/>
    <input *ngIf="album.bought === false" type="checkbox" (click)="toggleBought(true)"/>
    <label>Buy Album</label>
  </div>
  `
})
export class AlbumDisplayComponent {
  @Input() album: Album;
  toggleBought(setBuy: boolean) {
    this.album.bought = setBuy;
  }
}
