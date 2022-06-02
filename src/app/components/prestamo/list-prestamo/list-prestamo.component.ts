import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { PrestamoI } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-list-prestamo',
  templateUrl: './list-prestamo.component.html',
  styleUrls: ['./list-prestamo.component.css']
})
export class ListPrestamoComponent implements OnInit {

  public prestamos: PrestamoI[] = []
  public displayedColumns: string[] = ["UsuarioId", "EjemplarId", "fechaDev", "fechapres"]
  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarPrestamos()
  }
  mostrarPrestamos(){
    this.prestamoService.getAllPrestamo()
      .subscribe({
        next: (data) => {
          this.prestamos = data.prestamo
          console.log(this.prestamos)
        }
      })
  }

}
