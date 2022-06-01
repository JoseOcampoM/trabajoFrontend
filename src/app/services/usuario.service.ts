import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UsuarioI } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  api_uri = 'http://localhost:4000';
  constructor(
    private http:HttpClient
  ) { }

  getAllUsuarios():Observable<{user:UsuarioI[]}>{
    return this.http.get<{user:UsuarioI[]}>(this.api_uri + '/usuarios')
  }

  create(data:any):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.api_uri + '/createusuario', data)
  }
}
