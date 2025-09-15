import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DashboardService{
    http:HttpClient = inject(HttpClient);

    private apiUrl = 'http://localhost:3000/reservations';
    GetAllReservations():Observable<any>{
        return this.http.get(this.apiUrl);
    }

    GetMyReservations():Observable<any>{
        return this.http.get(this.apiUrl+'/my');
    }
}