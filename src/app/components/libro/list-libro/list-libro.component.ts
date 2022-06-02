import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { LibroI } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.css']
})
export class ListLibroComponent implements OnInit {

  public libros: LibroI[] = []
  public displayedColumns: string[] = ["id", "titulo", "numero_pagina", "editorial", "isbn", "AutorId"]
  constructor(
    private libroService: LibroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarLibros()
  }
  mostrarLibros(){
    this.libroService.getAllLibro()
      .subscribe({
        next: (data) => {
          this.libros = data.libro
          console.log(this.libros)
        }
      })
  }

}
