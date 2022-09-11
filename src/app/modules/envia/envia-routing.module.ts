import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './components/formulario-envio/formulario-envio.component';
import { EnviaComponent } from './envia.component';

const routes: Routes = [
  {
    path: '',
    component: EnviaComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'formularioEnvio',
      },
      {
        path: 'formularioEnvio',
        component: FormularioEnvioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnviaRoutingModule { }
