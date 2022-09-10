import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'login-and-sigin',
    templateUrl: './login-and-sigin.component.html',
    styleUrls: ['./login-and-sigin.component.css']
})
export class LoginAndSiginComponent implements OnInit{
    title = 'welcome';
    constructor(private _authservice: AuthenticationService){
        
    }
    ngOnInit(): void {
        this._authservice.getInfoLoginPersistence();
    }
}