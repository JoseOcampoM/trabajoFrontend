import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component';
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component';
import { ListPrestamoComponent } from './components/prestamo/list-prestamo/list-prestamo.component';
import { CreatePrestamoComponent } from './components/prestamo/create-prestamo/create-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUsuarioComponent,
    CreateUsuarioComponent,
    ListEjemplarComponent,
    CreateEjemplarComponent,
    ListPrestamoComponent,
    CreatePrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
