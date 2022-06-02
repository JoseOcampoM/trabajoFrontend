import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { LibroI } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  api_uri = 'http://localhost:4001';
  constructor(
    private http:HttpClient
  ) { }

  getAllLibro():Observable<{libro:LibroI[]}>{
    return this.http.get<{libro:LibroI[]}>(this.api_uri + '/libros')
  }

  createLibro(data:any):Observable<LibroI>{
    return this.http.post<LibroI>(this.api_uri + '/crearlibro', data)
  }
}
