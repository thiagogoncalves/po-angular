import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ClientesComponent } from './clientes/clientes.component';
import { TesteComponent } from './teste/teste.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClientesComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
