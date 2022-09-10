import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    //value: string | null = "";
    constructor(private route: Router, private _authService: AuthenticationService) { }
    // Formulario de logeo
    public loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        value: new FormControl('', [Validators.required])
    });

    ngOnInit(): void {
    }
    matcher = new MyErrorStateMatcher();

    // Evento login
    public loginApp() {
        let email: string | any = this.loginForm.get('email');
        let password: string | any = this.loginForm.get('password');
        let infoLogin: any = {
            email: email,
            password: password
        }
        this._authService.loginUser(infoLogin.email, infoLogin.password);
    }

    public registerLink() {
        this.route.navigate(['welcome/registro'])
    }
    public showValue(){
        console.log(this.loginForm.get('value')?.value);
    }

}
