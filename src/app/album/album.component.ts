import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {
  albums: Album[] = [];

  constructor(private serviciodealbums: AlbumService) {}

  ngOnInit(): void {
    this.CargarAlbums();
  }

  CargarAlbums(): void {
    this.serviciodealbums.traerAlbums().subscribe((res: any) => {
      this.albums= res;

      // Recorrer el array usando forEach
      this.albums.forEach((albumss: Album) => {
         // Hacer algo con cada tarea, por ejemplo, mostrar su nombre
        console.log(albumss.id)
      });
    });
  }
}
