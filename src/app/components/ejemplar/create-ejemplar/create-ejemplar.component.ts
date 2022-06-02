import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/services/ejemplar.service';

@Component({
  selector: 'app-create-ejemplar',
  templateUrl: './create-ejemplar.component.html',
  styleUrls: ['./create-ejemplar.component.css']
})
export class CreateEjemplarComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group(
    {
      localizacion: ['', [Validators.required]],
      LibroId: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private ejemplarService: EjemplarService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:EjemplarI = this.formulario.value;
    this.ejemplarService.createEjemplar(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Ejemplar Creado correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/ejemplar');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/ejemplar');
      }
    })
  }
}
