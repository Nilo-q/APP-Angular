import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

{ path: 'comentarios', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) }, 
{ path: 'publicaciones', loadChildren: () => import('./post/post.module').then(m => m.PostModule) }, 
{ path: 'tareas', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }, 
{ path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) }, 
{ path: 'usuario', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path: 'productos', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
// { path: 'inicio', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
