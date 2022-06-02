import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAutorComponent } from './components/autor/create-autor/create-autor.component';
import { ListAutorComponent } from './components/autor/list-autor/list-autor.component';
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component';
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component';
import { CreateLibroComponent } from './components/libro/create-libro/create-libro.component';
import { ListLibroComponent } from './components/libro/list-libro/list-libro.component';
import { CreatePrestamoComponent } from './components/prestamo/create-prestamo/create-prestamo.component';
import { ListPrestamoComponent } from './components/prestamo/list-prestamo/list-prestamo.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';

const routes: Routes = [
  {
    path: "usuario",
    component: ListUsuarioComponent
  },
  {
    path: "usuarioCreate",
    component: CreateUsuarioComponent
  },
  {
    path: "ejemplar",
    component: ListEjemplarComponent
  },
  {
    path: "ejemplarCreate",
    component: CreateEjemplarComponent
  },
  {
    path: "prestamo",
    component: ListPrestamoComponent
  },
  {
    path: "prestamoCreate",
    component: CreatePrestamoComponent
  },
  {
    path: "autor",
    component: ListAutorComponent
  },
  {
    path: "autorCreate",
    component: CreateAutorComponent
  },
  {
    path: "libro",
    component: ListLibroComponent
  },
  {
    path: "libroCreate",
    component: CreateLibroComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
