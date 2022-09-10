import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../interfaces/user';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-sigin',
    templateUrl: './sigin.component.html',
    styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

    // Formulario de registro
    public siginForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        identification: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
    });
    public matcher = new MyErrorStateMatcher();
    constructor(private _authService: AuthenticationService) { }

    ngOnInit(): void {
    }

    public createUser(): void {
        let name: string | any = this.siginForm.get('name');
        let email: string | any = this.siginForm.get('email');
        let lastName: string | any = this.siginForm.get('lastName');
        let password: string | any = this.siginForm.get('password');
        let identification: number | any = this.siginForm.get('identification');
        let phone: number | any = this.siginForm.get('identification');
        let newUser: User = {
            id: "u",
            email: email,
            name: name,
            lastName: lastName,
            password: password,
            identification: identification,
            phonenumber: phone
        }
        this._authService.createNewUser(newUser);
    }

    public reset(): void {
        this.siginForm.reset();
    }

}
