import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { FormsModule }    from  '@angular/forms';
import { EditAlbumComponent } from './edit-album.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, AlbumListComponent, EditAlbumComponent, ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
