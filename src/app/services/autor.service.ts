import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorI } from '../models/autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {
  api_uri = 'http://localhost:4001';
  constructor(
    private http:HttpClient
  ) { }

  getAllAutor():Observable<{autor:AutorI[]}>{
    return this.http.get<{autor:AutorI[]}>(this.api_uri + '/autores')
  }

  createAutor(data:any):Observable<AutorI>{
    return this.http.post<AutorI>(this.api_uri + '/crearautor', data)
  }
}
