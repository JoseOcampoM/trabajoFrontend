import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { EjemplarI } from '../models/ejemplar';

@Injectable({
  providedIn: 'root'
})
export class EjemplarService {
  api_uri = 'http://localhost:4001';
  constructor(
    private http:HttpClient
  ) { }

  getAllEjemplar():Observable<{ejemplar:EjemplarI[]}>{
    return this.http.get<{ejemplar:EjemplarI[]}>(this.api_uri + '/ejemplares')
  }

  createEjemplar(data:any):Observable<EjemplarI>{
    return this.http.post<EjemplarI>(this.api_uri + '/createejemplar', data)
  }
}
