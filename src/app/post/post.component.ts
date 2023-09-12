import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent  implements OnInit {
  posters: Post [] = []
  loading: boolean = false;
  error: string = '';

  constructor(private postservice: PostService) {}

  ngOnInit(): void{
    this.cargarPosts();
  }
  
  cargarPosts(): void {
    this.postservice.traerPost().subscribe((res: any) => {

        //Validar los datos  que trae el api 
        console.log('Respuesta del API:', res);

        this.posters = res;

        this.posters.forEach((poster: Post)=> {
          console.log(poster.body)
        })
    })
  }
}
