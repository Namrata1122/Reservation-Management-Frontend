import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";

@Injectable({
    providedIn:'root'
})
export class DashboardService{
    http:HttpClient = inject(HttpClient);
    authService:AuthService = inject(AuthService);

    private apiUrl = 'http://localhost:3000/reservations';
    GetAllReservations():Observable<any>{
        return this.http.get(this.apiUrl);
    }

    GetMyReservations():Observable<any>{
        const token = this.authService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(this.apiUrl+'/my',{headers});
    }
}