import { Component, OnInit } from '@angular/core';
import { QuerylistService } from '../querylist.service';
import { ResultResponseQueryDto } from '../model/result-response-query-dto.model';
import { UserDto } from '../model/user-dto.model';
import { PageEvent } from '@angular/material/paginator';
import { ObtainTokenService } from '../obtaintoken.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  operaciones: any[];
  resultResponse: ResultResponseQueryDto;
  resultToken: UserDto;
  size: string = '5';
  page: string = '1';
  token: string = '';
  constructor(private querylistService: QuerylistService, private obtainTokenService: ObtainTokenService) {
    this.operaciones = [];
    this.resultResponse = {} as ResultResponseQueryDto;
    this.resultToken = {} as UserDto;
  }

  ngOnInit(): void {
    this.obtainTokenService.obtenerToken().pipe(
      switchMap((token: string) => {
        this.token = token;
        return this.querylistService.obtenerOperaciones(this.token, this.size, this.page);
      })
    ).subscribe(
      (response: ResultResponseQueryDto) => {
        this.resultResponse = response;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  onPageChange(event: PageEvent): void {
    const page = (event.pageIndex + 1).toString()
    this.querylistService.obtenerOperaciones(this.token, this.size, page)
      .subscribe(
        (response: ResultResponseQueryDto) => {
          this.resultResponse = response;
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
  }

  obtenerToken(): void {

    this.obtainTokenService.obtenerToken().subscribe(
      (token: string) => {
        console.log('Token obtenido:', token);
      },
      (error) => {
        console.error('Error al obtener el token:', error);
      }
    );
  }


}
