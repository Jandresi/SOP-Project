import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { IngresosService } from '../ingresos.service';
import { Observable } from 'rxjs';
import { Llamada } from '../../../Models/llamadas.interface';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  constructor(private ingresosSvc: IngresosService) { }

  data$: Observable<Llamada[]>;

  // Variables que alojarán los datos de los gráficos
  contadorGeneral = 0;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  contador5 = 0;

  colorUnico = this.colorRGB();

  // FUNCIONES PARA GENERAR NÚMEROS ALEATORIOS
  generarNumero(numero): string{
    return (Math.random() * numero).toFixed(0);
  }
  colorRGB(): string{
    const color = '(' + this.generarNumero(255) + ',' + this.generarNumero(255) + ',' + this.generarNumero(255) + ')';
    return 'rgb' + color;
  }
  // ------------------------------------------

  ngOnInit(): void {
    this.data$ = this.ingresosSvc.getLlamadas();

    // Trae el total de llamadas recibidas en el mes //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contadorGeneral = res.length;
    });

    // Cuenta las llamadas recibidas por cada contestador //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      res.forEach(r => {
        if (r.atiende === 'Katherin Muñoz') {
          this.contador1++;
        }
        else if (r.atiende === 'Jesica Salazar') {
          this.contador2++;
        }
        else if (r.atiende === 'Jean Carlos') {
          this.contador3++;
        }
        else if (r.atiende === 'Andrés Silva') {
          this.contador4++;
        }
        else if (r.atiende === 'Comodín') {
          this.contador5++;
        }
      }
      );

      const graficoAtiende = new Chart('porPersona', {
        type: 'bar',
        data: {
          labels: ['Katherin Muñoz', 'Jésica Salazar', 'Jean Carlos', 'Andrés Silva', 'Comodín'],
          datasets: [{
            label: 'Llamadas recibidas',
            data: [this.contador1, this.contador2, this.contador3, this.contador4, this.contador5],
            backgroundColor: [
              'blue',
              'blue',
              'blue',
              'blue',
              'blue'
            ]
          }]
        },
      });

    });
  }


}
