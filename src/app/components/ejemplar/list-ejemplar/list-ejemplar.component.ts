import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/services/ejemplar.service';

@Component({
  selector: 'app-list-ejemplar',
  templateUrl: './list-ejemplar.component.html',
  styleUrls: ['./list-ejemplar.component.css']
})
export class ListEjemplarComponent implements OnInit {
  public ejemplares: EjemplarI[] = []
  public displayedColumns: string[] = ["localizacion", "Acciones"]
  constructor(
    private ejemplarService: EjemplarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarEjemplares()
  }
  mostrarEjemplares(){
    this.ejemplarService.getAllEjemplar()
      .subscribe({
        next: (data) => {
          this.ejemplares = data.ejemplar
          console.log(this.ejemplares)
        }
      })
  }

}
