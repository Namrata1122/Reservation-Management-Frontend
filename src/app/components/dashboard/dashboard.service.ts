import { Injectable } from "@angular/core";
import {jwtDecode} from 'jwt-decode'

@Injectable({
    providedIn:'root'
})
export class DashboardService{
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
}