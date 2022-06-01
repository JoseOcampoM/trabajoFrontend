import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component';
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component';
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
