import { Injectable } from "@angular/core";
import {jwtDecode} from 'jwt-decode'
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private userSubject = new BehaviorSubject<any>(this.getUserFromToken());
    public user$: Observable<any> = this.userSubject.asObservable();

    getToken():string|null{
        return localStorage.getItem('token');
    }

    getUserFromToken():any{
        const token = this.getToken();
        if(token){
            const decoded = jwtDecode(token);
            return decoded;
        }
        return null;
    }

    updateUser():void{
        const user = this.getUserFromToken();
        this.userSubject.next(user);
    }

    logout():void{
        localStorage.removeItem('token');
        this.userSubject.next(null);
    }

    login(token:string):void{
        localStorage.setItem('token',token);
        this.updateUser();
    }
}