import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './ingresos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IngresosComponent],
  imports: [
    CommonModule,
    IngresosRoutingModule,
    ReactiveFormsModule
  ]
})
export class IngresosModule { }
