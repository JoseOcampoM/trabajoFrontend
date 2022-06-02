import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-create-autor',
  templateUrl: './create-autor.component.html',
  styleUrls: ['./create-autor.component.css']
})
export class CreateAutorComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private autorService: AutorService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:AutorI = this.formulario.value;
    this.autorService.createAutor(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Autor Creado correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/autor');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/autor');
      }
    })
  }

}
