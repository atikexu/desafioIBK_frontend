import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangerateService {
  private apiUrl = 'http://localhost:8099';

  constructor(private http: HttpClient) { }

  calcularTipoCambio(datos: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });
    return this.http.post<any>(`${this.apiUrl}/api/exchangerate`, datos, { headers });
  }
}
