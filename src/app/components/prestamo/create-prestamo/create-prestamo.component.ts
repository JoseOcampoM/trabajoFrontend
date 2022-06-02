import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { PrestamoI } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-create-prestamo',
  templateUrl: './create-prestamo.component.html',
  styleUrls: ['./create-prestamo.component.css']
})
export class CreatePrestamoComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      UsuarioId: ['', [Validators.required]],
      EjemplarId: ['', [Validators.required]],
      fechaDev: ['', [Validators.required]],
      fechapres: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private prestamoService: PrestamoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:PrestamoI = this.formulario.value;
    this.prestamoService.createPrestamo(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Prestamo Creado correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/prestamo');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/prestamo');
      }
    })
  }

}
