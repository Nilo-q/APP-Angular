import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  usuarios: User[] = [];

  constructor(private serviciodeusuarios: UserService){}

  ngOnInit(): void {
      this.CargarUsuarios();
  }

  CargarUsuarios(): void {
    this.serviciodeusuarios.traerUsuarios().subscribe((res: any) =>{
      this.usuarios= res;

      // Recorrer el array usando forEach
      this.usuarios.forEach((usuario: User) =>{
      // Hacer algo con cada tarea, por ejemplo, mostrar su nombre
      console.log(usuario.address.city);
      })
    })
  }
}
