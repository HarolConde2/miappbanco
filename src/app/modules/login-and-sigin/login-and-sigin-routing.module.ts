import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { LoginAndSiginComponent } from './login-and-sigin.component';

const routes: Routes = [
    {
        path: '',
        component: LoginAndSiginComponent,
        children: [
            {
                path: '',
                pathMatch: 'prefix',
                redirectTo: 'iniciar-sesion'
            },
            {
                path: 'iniciar-sesion',
                component: LoginComponent,
            },
            {
                path: 'registro',
                component: SiginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginAndSiginRoutingModule { }
