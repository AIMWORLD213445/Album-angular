import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumListComponent } from './album-list.component';
import { FormsModule }    from  '@angular/forms';
import { EditAlbumComponent } from './edit-album.component';
import { NewAlbumComponent } from './new-album.component';
import { BuyPipe } from './buy.pipe';
import { AlbumDisplayComponent } from './album-display.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, AlbumListComponent, EditAlbumComponent, NewAlbumComponent, BuyPipe, AlbumDisplayComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
