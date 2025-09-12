import {HttpClient} from "@angular/common/http"
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class RegistrationService{
    http: HttpClient = inject(HttpClient);

    private apiUrl = 'http://localhost:5000/auth/register';
    registerUser(data:any):Observable<any>{
        return this.http.post(this.apiUrl,data);
    }
}