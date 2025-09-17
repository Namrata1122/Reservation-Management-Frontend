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

    // admin-dashboard
    GetAllReservations():Observable<any>{
        return this.http.get(this.apiUrl);
    }

    // user-dashboard
    GetMyReservations():Observable<any>{
        return this.http.get(this.apiUrl+'/my');
    }

    CreateReservation(data:any):Observable<any>{
        return this.http.post(this.apiUrl,data);
    }

    CancelReservation(reservationId:string):Observable<any>{
        return this.http.delete(`${this.apiUrl}/${reservationId}`);
    }
}