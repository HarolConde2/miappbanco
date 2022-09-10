import { Injectable, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import { Credit } from '../interfaces/credit';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public currentUser: any;
    constructor() {
        
    }

    public loginUser(email: string, password: string) {
        
    };

    public getInfoLoginPersistence(){
        
    };

    public createNewUser(user: User){
        console.log(user);
    };
}
