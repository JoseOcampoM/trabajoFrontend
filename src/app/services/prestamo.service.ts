import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { PrestamoI } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  api_uri = 'http://localhost:4001';
  constructor(
    private http:HttpClient
  ) { }

  getAllPrestamo():Observable<{prestamo:PrestamoI[]}>{
    return this.http.get<{prestamo:PrestamoI[]}>(this.api_uri + '/prestamos')
  }

  createPrestamo(data:any):Observable<PrestamoI>{
    return this.http.post<PrestamoI>(this.api_uri + '/createprestamos', data)
  }
}
