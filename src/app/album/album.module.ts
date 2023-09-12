import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './album.service';

@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HttpClientModule
  ],
  providers:[AlbumService]
})
export class AlbumModule { }
