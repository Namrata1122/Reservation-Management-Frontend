import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LoginService{
    http:HttpClient = inject(HttpClient);

    private apiUrl = 'http://localhost:3000/auth/login';
    LoginUser(data:any):Observable<any>{
        return this.http.post(this.apiUrl,data);
    }
}