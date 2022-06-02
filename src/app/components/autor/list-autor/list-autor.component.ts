import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';


@Component({
  selector: 'app-list-autor',
  templateUrl: './list-autor.component.html',
  styleUrls: ['./list-autor.component.css']
})
export class ListAutorComponent implements OnInit {

  public autores: AutorI[] = []
  public displayedColumns: string[] = ["id", "nombre", "Acciones"]
  constructor(
    private autorService: AutorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarAutores()
  }
  mostrarAutores(){
    this.autorService.getAllAutor()
      .subscribe({
        next: (data) => {
          this.autores = data.autor
          console.log(this.autores)
        }
      })
  }

}
