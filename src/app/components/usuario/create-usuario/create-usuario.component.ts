import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue:UsuarioI = this.formulario.value;
    this.usuarioService.create(formValue).subscribe({
      next:(res: any) => {
        this.snackBar.open('Usuario Creada correctamente', 'OK', {duration:500});
        this.router.navigateByUrl('/usuario');
      },
      error:(err: any) => {
        this.snackBar.open('Error', 'ERROR', {duration:500});
        console.log(err)
        this.router.navigateByUrl('/usuario');
      }
    })
  }
}
