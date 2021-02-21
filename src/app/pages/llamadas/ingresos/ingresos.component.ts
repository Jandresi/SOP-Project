import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Llamada } from '../../../Models/llamadas.interface';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  /* Me da acceso al observable */
  llamadas$ = this.ingresosSvc.llamadas;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  llamada: Llamada;
  formularioLlamada: FormGroup;
  miFecha = Date.now();


  constructor(private router: Router, private fb: FormBuilder, private ingresosSvc: IngresosService) {
    const navigation = this.router.getCurrentNavigation();
    this.llamada = navigation?.extras?.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
  }

  /* Tomará los datos del objeto seleccionado y los llevará a otra
    interfaz para ser modificados */
  onGoToEditar(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }

  async onGoToEliminar(llamadaId: string): Promise<void> {
    try{
      await this.ingresosSvc.onEliminarLlamada(llamadaId);
      alert('ELIMINADO');
    }catch (err){
      console.log(err);
    }
  }

  /* Si el formulario es válido, la constante se volverá los datos del formulario
    y vaciará después los campos del formulario */
  onGuardar(): void{
    if (this.formularioLlamada.valid){
      const llamada = this.formularioLlamada.value;
      const llamadaId = this.llamada?.id || null;
      this.ingresosSvc.onGuardarLlamada(llamada, llamadaId);
      this.formularioLlamada.reset();
    }
  }

  /* Función para vaciar los campos */
  onLimpiar(): void{
    this.formularioLlamada.reset();
  }

  /* Validador que define cuándo una casilla está vacía y cuándo no */
  isValidField(field: string): string {
    const validatedField = this.formularioLlamada.get(field);
    return( !validatedField.valid && validatedField.touched)
    ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  /* Formulario que usará de base para llenar */
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
