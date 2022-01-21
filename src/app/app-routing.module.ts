import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable-next-line: max-line-length
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'ingresos', loadChildren: () => import('./pages/llamadas/ingresos/ingresos.module').then(m => m.IngresosModule)
  },
  {
    path: 'editar', loadChildren: () => import('./pages/llamadas/editar/editar.module').then(m => m.EditarModule)
  },
  {
    path: 'informes', loadChildren: () => import('./pages/llamadas/informes/informes.module').then(m => m.InformesModule)
  },
  {
    path: 'historial', loadChildren: () => import('./pages/llamadas/historial/historial.module').then(m => m.HistorialModule)
  },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
