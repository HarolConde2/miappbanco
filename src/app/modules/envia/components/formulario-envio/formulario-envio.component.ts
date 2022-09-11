import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css'],
})

export class FormularioEnvioComponent implements OnInit {

  // Formulario de registro
  public formulario = new FormGroup({
    nombre: new FormControl(''),
    tel: new FormControl(''),
    pass: new FormControl(''),
    money: new FormControl(''),
  });

  _servicio: any;

  constructor() {
  }

  onSubmit() {
    localStorage.setItem('formularioEnvío', JSON.stringify(this.formulario.value));
    this._servicio.anexarTarea(this.formulario.value);
    console.log(this._servicio);
    console.log(localStorage.getItem('formularioEnvío'));
  }

  ngOnInit(): void {
  }

}
