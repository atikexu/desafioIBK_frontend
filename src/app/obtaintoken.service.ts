import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from './model/user-dto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObtainTokenService {
  private apiUrl = 'http://localhost:8099';

  constructor(private http: HttpClient) { }

  obtenerToken(): Observable<string> {
    return this.http.get<UserDto>(`${this.apiUrl}/login?user=alan&pass=alan`).pipe(
      map((response: UserDto) => {
        return response.token;
      })
    );
  }

}
