import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAndSiginRoutingModule } from './login-and-sigin-routing.module';
import { SiginComponent } from './components/sigin/sigin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAndSiginComponent } from './login-and-sigin.component';
import { AuthenticationService } from './services/authentication.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
  declarations: [
    LoginAndSiginComponent,
    SiginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LoginAndSiginRoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [LoginAndSiginComponent]
})
export class LoginAndSiginModule { }
