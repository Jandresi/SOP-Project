import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Llamada } from '../../../Models/llamadas.interface';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  llamada: Llamada;
  formularioLlamada: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private ingresosSvc: IngresosService) {
    const navigation = this.router.getCurrentNavigation();
    this.llamada = navigation?.extras?.state?.value;
    this.initForm();
   }

  /* Inicialización del formulario a editar */
  ngOnInit(): void {
    if (typeof this.llamada === 'undefined'){
      this.router.navigate(['ingresos']);
    }else {
      this.formularioLlamada.patchValue(this.llamada);
    }
  }

  /* Resultado final de darle "Guardar" */
  onGuardar(): void{
    console.log('Guardado', this.formularioLlamada.value);
    if (this.formularioLlamada.valid){
      const llamada = this.formularioLlamada.value;
      const llamadaId = this.llamada?.id || null;
      this.ingresosSvc.onGuardarLlamada(llamada, llamadaId);
      this.formularioLlamada.reset();
      this.router.navigate(['ingresos']);
    }
  }

  onGoBack(): void{
    this.router.navigate(['ingresos']);
  }

  /* Formulario que usará de base para editar */
  private initForm(): void{
    this.formularioLlamada = this.fb.group({
      fecha: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      solucion: ['', [Validators.required]]
    });
  }

}
