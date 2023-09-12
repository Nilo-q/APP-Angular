import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Post } from './post';

const direccionweb = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  post: Post[] = [];

  constructor(private elquetraedatos: HttpClient) { }
  
  traerPost(): Observable <any> {
    return this.elquetraedatos
    .get(direccionweb)
    .pipe(catchError(this.manejaError));
  }

  private manejaError(error: HttpErrorResponse): any{
    if (error.error instanceof ErrorEvent){
      console.error('Ocurrió un error:', error.error.message);
    } else{
      console.log(`Codigo del error es ${error.status}, mensaje: ${error.message}`);
    }
    return console.log('algo pasó por favor intente más tardecito');
  }
}
