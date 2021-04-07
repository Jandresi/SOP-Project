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
  promedioDiario = 0.0;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  contador5 = 0;
  contador6 = 0;
  contador7 = 0;
  contador8 = 0;
  contador9 = 0;
  contador10 = 0;
  contador11 = 0;
  contador12 = 0;
  contador13 = 0;
  contador14 = 0;
  contador15 = 0;
  contador16 = 0;
  contador17 = 0;
  contador18 = 0;
  contador19 = 0;
  contador20 = 0;
  contador21 = 0;
  contador22 = 0;
  contador23 = 0;
  contador24 = 0;
  contador25 = 0;
  contador26 = 0;
  contador27 = 0;
  contador28 = 0;
  contador29 = 0;
  contador30 = 0;

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

// Trae el total y el promedio de llamadas recibidas en el mes //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contadorGeneral = (res.length - 1);
      this.promedioDiario = Math.floor(res.length / 5);
    });

// Cuenta las llamadas recibidas por cada contestador //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;

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
      });

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
    }); // Cierre del gráfico

// Gráfico Donut de los motivos de llamadas

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;

      res.forEach(r => {
        if (r.motivo === 'Información') {
          this.contador1++;
        }
        else if (r.motivo === 'Disponibilidad') {
          this.contador2++;
        }
        else if (r.motivo === 'Calidad') {
          this.contador3++;
        }
        else if (r.motivo === 'Facturación') {
          this.contador4++;
        }
      });

      const graficoMotivo = new Chart('porMotivo', {
        type: 'doughnut',
        data: {
          labels: ['Información', 'Disponibilidad', 'Calidad', 'Facturación'],
          datasets: [{
            label: 'Motivos de llamadas',
            data: [this.contador1, this.contador2, this.contador3, this.contador4],
            backgroundColor: [
              'rgb(0, 114, 240)',
              'rgb(0, 182, 203)',
              'rgb(241, 0, 150)',
              'rgb(246, 109, 0)'
            ]
          }]
        },
      });
    }); // Cierre del gráfico


// Gráfico de líneas día por día //

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;

      res.forEach(r => {
        if (r.fecha === '2021-01-01') {
          this.contador1++;
        }
        else if (r.fecha === '2021-01-02') {
          this.contador2++;
        }
        else if (r.fecha === '2021-01-03') {
          this.contador3++;
        }
        else if (r.fecha === '2021-01-04') {
          this.contador4++;
        }
        else if (r.fecha === '2021-01-05') {
          this.contador5++;
        }
        else if (r.fecha === '2021-01-06') {
          this.contador6++;
        }
        else if (r.fecha === '2021-01-07') {
          this.contador7++;
        }
        else if (r.fecha === '2021-01-08') {
          this.contador8++;
        }
        else if (r.fecha === '2021-01-09') {
          this.contador9++;
        }
        else if (r.fecha === '2021-01-010') {
          this.contador10++;
        }
        else if (r.fecha === '2021-01-11') {
          this.contador11++;
        }
        else if (r.fecha === '2021-01-12') {
          this.contador12++;
        }
        else if (r.fecha === '2021-01-13') {
          this.contador13++;
        }
        else if (r.fecha === '2021-01-14') {
          this.contador14++;
        }
        else if (r.fecha === '2021-01-15') {
          this.contador15++;
        }
        else if (r.fecha === '2021-01-16') {
          this.contador16++;
        }
        else if (r.fecha === '2021-01-17') {
          this.contador17++;
        }
        else if (r.fecha === '2021-01-18') {
          this.contador18++;
        }
        else if (r.fecha === '2021-01-19') {
          this.contador19++;
        }
        else if (r.fecha === '2021-01-20') {
          this.contador20++;
        }
        else if (r.fecha === '2021-01-21') {
          this.contador21++;
        }
        else if (r.fecha === '2021-01-22') {
          this.contador22++;
        }
        else if (r.fecha === '2021-01-23') {
          this.contador23++;
        }
        else if (r.fecha === '2021-01-24') {
          this.contador24++;
        }
        else if (r.fecha === '2021-01-25') {
          this.contador25++;
        }
        else if (r.fecha === '2021-01-26') {
          this.contador26++;
        }
        else if (r.fecha === '2021-01-27') {
          this.contador27++;
        }
        else if (r.fecha === '2021-01-28') {
          this.contador28++;
        }
        else if (r.fecha === '2021-01-29') {
          this.contador29++;
        }
        else if (r.fecha === '2021-01-30') {
          this.contador30++;
        }
      });

      const graficoDia = new Chart('porDia', {
        type: 'line',
        data: {
          labels: ['1-ene', '2-ene', '3-ene', '4-ene', '5-ene', '6-ene', '7-ene', '8-ene', '9-ene', '10-ene'/* ,
          '11-ene', '12-ene', '13-ene', '14-ene', '15-ene', '16-ene', '17-ene', '18-ene', '19-ene', '20-ene',
          '21-ene', '22-ene', '23-ene', '24-ene', '25-ene', '26-ene', '27-ene', '28-ene', '29-ene', '30-ene' */],
          datasets: [{
            label: 'Llamadas en el día',
            data: [this.contador1,
              this.contador2,
              this.contador3,
              this.contador4,
              this.contador5,
              this.contador6,
              this.contador7,
              this.contador8,
              this.contador9,
              this.contador10,
              this.contador11,
              this.contador12,
              this.contador13,
              this.contador14,
              this.contador15,
              this.contador16,
              this.contador17,
              this.contador18,
              this.contador19,
              this.contador20,
              this.contador21,
              this.contador22,
              this.contador23,
              this.contador24,
              this.contador25,
              this.contador26,
              this.contador27,
              this.contador28,
              this.contador29,
              this.contador30
            ],

            borderColor: 'rgb(255, 179, 0)',
            fill: false,
            tension: 0.1,
            pointRadius: 5,
            pointBackgroundColor: 'rgb(255, 179, 0)'
          }]
        },
      });
    }); // Cierre del gráfico



// Gráfico de soluciones dadas por el PBX

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;
      this.contador6 = 0;
      this.contador7 = 0;
      this.contador8 = 0;

      res.forEach(r => {
        if (r.solucion === 'Se da información') {
          this.contador1++;
        }
        else if (r.solucion === 'Se toma O de S para técnico') {
          this.contador2++;
        }
        else if (r.solucion === 'Se cambian credenciales WIFI') {
          this.contador3++;
        }
        else if (r.solucion === 'Se soluciona reiniciando') {
          this.contador4++;
        }
        else if (r.solucion === 'Se toma O de S para codinet') {
          this.contador5++;
        }
        else if (r.solucion === 'Se remite con otra persona') {
          this.contador6++;
        }
        else if (r.solucion === 'Procedimiento general') {
          this.contador7++;
        }
        else if (r.solucion === 'Se toma O de S para instaladores') {
          this.contador8++;
        }
      });

      const graficoSolucion = new Chart('porSolucion', {
        type: 'bar',
        data: {
          labels: ['Se toma O de S para instaladores', 'Procedimiento general', 'Se remite con otra persona',
          'Se toma O de S para codinet', 'Se soluciona reiniciando', 'Se cambian credenciales WIFI',
        'Se toma O de S para técnico', 'Se da información'],
          datasets: [{
            label: 'Respuesta de los contestadores',
            data: [this.contador8, this.contador7, this.contador6, this.contador5, this.contador4,
              this.contador3, this.contador2, this.contador1],
            backgroundColor: [
              'blue',
              'blue',
              'blue',
              'blue',
              'blue',
              'blue',
              'blue',
              'blue'
            ]
          }]
        },
      });
    }); // Cierre del gráfico


// Gráfico de llamadas de solamente INFORMACIÓN

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;
      this.contador6 = 0;
      this.contador7 = 0;
      this.contador8 = 0;
      this.contador9 = 0;
      this.contador10 = 0;

      res.forEach(r => {
        if (r.descripcion === 'Cambio de credenciales WIFI') {
          this.contador1++;
        }
        else if (r.descripcion === 'Informaciones variadas') {
          this.contador2++;
        }
        else if (r.descripcion === 'Mantenimiento pendiente') {
          this.contador3++;
        }
        else if (r.descripcion === 'Proceso de afiliación') {
          this.contador4++;
        }
        else if (r.descripcion === 'Instalación pendiente') {
          this.contador5++;
        }
        else if (r.descripcion === 'Traslado pendiente') {
          this.contador6++;
        }
        else if (r.descripcion === 'Proceso de desafiliación') {
          this.contador7++;
        }
        else if (r.descripcion === 'Número del coordinador') {
          this.contador8++;
        }
        else if (r.descripcion === 'Puntos de pago') {
          this.contador9++;
        }
        else if (r.descripcion === 'Cobertura de WIFI') {
          this.contador10++;
        }
      });

      const graficoSolucion = new Chart('porInformacion', {
        type: 'horizontalBar',
        data: {
          labels: ['Cambio de credenciales WIFI', 'Informaciones variadas', 'Mantenimiento pendiente',
          'Proceso de afiliación', 'Instalación pendiente', 'Traslado pendiente', 'Proceso de desafiliación',
          'Número del coordinador', 'Puntos de pago', 'Cobertura de WIFI'],
          datasets: [{
            label: 'Llamada de información',
            data: [this.contador1, this.contador2, this.contador3, this.contador4, this.contador5,
              this.contador6, this.contador7, this.contador8, this.contador9, this.contador10],
            backgroundColor: [
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)'
            ]
          }],
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              type: 'logarithmic',
            }
          }
        }
      });
    });

// Gráfico de llamadas de solamente DISPONIBILIDAD

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;
      this.contador6 = 0;
      this.contador7 = 0;

      res.forEach(r => {
        if (r.descripcion === 'Todo ok pero no navega') {
          this.contador1++;
        }
        else if (r.descripcion === 'CM encendido offline') {
          this.contador2++;
        }
        else if (r.descripcion === 'Sin señal de TV') {
          this.contador3++;
        }
        else if (r.descripcion === 'Sin ambos servicios') {
          this.contador4++;
        }
        else if (r.descripcion === 'Módem formateado') {
          this.contador5++;
        }
        else if (r.descripcion === 'Módem no enciende') {
          this.contador6++;
        }
        else if (r.descripcion === 'Daño general') {
          this.contador7++;
        }
      });

      const graficoSolucion = new Chart('porDisponibilidad', {
        type: 'horizontalBar',
        data: {
          labels: ['Todo ok pero no navega', 'CM encendido offline', 'Sin señal de TV',
          'Sin ambos servicios', 'Módem formateado', 'Módem no enciende', 'Daño general'],
          datasets: [{
            label: 'Llamadas',
            data: [this.contador1, this.contador2, this.contador3, this.contador4, this.contador5,
              this.contador6, this.contador7],
            backgroundColor: [
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)'
            ]
          }]
        }
      });
    });

// Gráfico de llamadas de solamente DISPONIBILIDAD

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;
      this.contador6 = 0;
      this.contador7 = 0;

      res.forEach(r => {
        if (r.descripcion === 'Todo ok pero no navega') {
          this.contador1++;
        }
        else if (r.descripcion === 'CM encendido offline') {
          this.contador2++;
        }
        else if (r.descripcion === 'Sin señal de TV') {
          this.contador3++;
        }
        else if (r.descripcion === 'Sin ambos servicios') {
          this.contador4++;
        }
        else if (r.descripcion === 'Módem formateado') {
          this.contador5++;
        }
        else if (r.descripcion === 'Módem no enciende') {
          this.contador6++;
        }
        else if (r.descripcion === 'Daño general') {
          this.contador7++;
        }
      });

      const graficoSolucion = new Chart('porCalidad', {
        type: 'horizontalBar',
        data: {
          labels: ['Caídas frecuentes', 'Lentitud', 'Señal lluviosa', 'TV lluviosa y caídas frecuentes'],
          datasets: [{
            label: 'Llamadas',
            data: [this.contador1, this.contador2, this.contador3, this.contador4],
            backgroundColor: [
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)',
              'rgb(255, 179, 0)'
            ]
          }]
        },
      });
    });

    // Gráfico de llamadas de solamente DISPONIBILIDAD

    // tslint:disable-next-line: deprecation
    this.data$.subscribe((res: Llamada[]) => {
      this.contador1 = 0;
      this.contador2 = 0;
      this.contador3 = 0;
      this.contador4 = 0;
      this.contador5 = 0;
      this.contador6 = 0;
      this.contador7 = 0;

      res.forEach(r => {
        if (r.descripcion === 'Consulta de saldo') {
          this.contador1++;
        }
        else if (r.descripcion === 'Cortado en sistema') {
          this.contador2++;
        }
        else if (r.descripcion === 'Reclamo por saldo') {
          this.contador3++;
        }
        else if (r.descripcion === 'Fechas de corte / pago') {
          this.contador4++;
        }
        else if (r.descripcion === 'Factura no llega') {
          this.contador5++;
        }
      });

      const graficoSolucion = new Chart('porFacturacion', {
        type: 'horizontalBar',
        data: {
          labels: ['Consulta de saldo', 'Cortado en sistema', 'Reclamo por saldo',
          'Fechas de corte / pago', 'Factura no llega'],
          datasets: [{
            label: 'Llamadas',
            data: [this.contador1, this.contador2, this.contador3, this.contador4, this.contador5],
            backgroundColor: [
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)',
              'rgb(21, 101, 192)'
            ]
          }]
        },
      });
    });


  } // Cierre del NgOnInit


}
