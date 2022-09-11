import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { EnviaRoutingModule } from './envia-routing.module';
import { EnviaComponent } from './envia.component';
import { FormularioEnvioComponent } from './components/formulario-envio/formulario-envio.component';


@NgModule({
  declarations: [
    EnviaComponent,
    FormularioEnvioComponent
  ],
  imports: [
    CommonModule,
    EnviaRoutingModule,
  ]
})
export class EnviaModule { }
