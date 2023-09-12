import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Album } from './album';

const direccionweb = 'https://jsonplaceholder.typicode.com/albums'

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  album: Album [] = []

  constructor(private elquetraedatos:HttpClient) { }

  traerAlbums():Observable<any> {
    return this.elquetraedatos
    .get(direccionweb)
    .pipe(catchError(this.manejarError));
  }

  private manejarError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('ocurrió un error:', error.error.message);
    } else {
      console.error(`codigo de error ${error.status}, ` + `es: ${error.error}`);
    }
    return console.log('algo pasó por favor intente más tardecito');
  }
}
