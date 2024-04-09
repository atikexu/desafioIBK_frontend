import { Component, OnInit } from '@angular/core';
import { ExchangerateService } from '../exchangerate.service';
import { ObtainTokenService } from '../obtaintoken.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {
  monto: number;
  monedaOrigen: string;
  monedaDestino: string;
  nuevoMonto: number;
  tipoCambio: number;
  token: string = '';

  constructor(private exchangerateService: ExchangerateService, private obtainTokenService: ObtainTokenService) {
    this.monto = 0;
    this.monedaOrigen = "";
    this.monedaDestino = "";
    this.nuevoMonto = 0;
    this.tipoCambio = 0;
   }
   ngOnInit(): void {
    this.obtainTokenService.obtenerToken().subscribe(
      (token: string) => {
        this.token = token;
      },
      (error) => {
        console.error('Error al obtener el token:', error);
      }
    );
  }

  calcularTipoCambio() {

    const datos = {
      amount: this.monto,
      originCurrency: this.monedaOrigen,
      destinationCurrency: this.monedaDestino
    };

    this.exchangerateService.calcularTipoCambio(datos, this.token)
      .subscribe(response => {
        this.monto = response.amount;
        this.nuevoMonto = response.amountExchangeRate;
        this.monedaOrigen = response.originCurrency;
        this.monedaDestino = response.destinationCurrency;
        this.tipoCambio = response.exchangeRate;
      });
  }
}
