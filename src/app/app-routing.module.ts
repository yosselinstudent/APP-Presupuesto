import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'ingresar-presupuesto'
  },
  {
    path:'ingresar-presupuesto',
    component: IngresarPresupuestoComponent
  },
  {
    path:'gastos',
    component: GastosComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'ingresar-presupuesto'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
