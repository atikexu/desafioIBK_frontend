import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ResultResponseQueryDto } from './model/result-response-query-dto.model';

@Injectable({
  providedIn: 'root'
})
export class QuerylistService {
  private apiUrl = 'http://localhost:8099/api';

  constructor(private http: HttpClient) { }

  obtenerOperaciones(token: string, size: string, page: string): Observable<ResultResponseQueryDto> {
    const headers = new HttpHeaders({
      'page': page,
      'size': size,
      'Authorization': `${token}`
    });
    return this.http.get<ResultResponseQueryDto>(`${this.apiUrl}/querylist`, { headers });
  }

}
