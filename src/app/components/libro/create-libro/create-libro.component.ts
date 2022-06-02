import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { LibroI } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css']
})
export class CreateLibroComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      titulo: ['', [Validators.required]],
      numero_pagina: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      AutorId: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private libroService: LibroService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:LibroI = this.formulario.value;
    this.libroService.createLibro(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Libro Creado correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/libro');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/libro');
      }
    })
  }

}
