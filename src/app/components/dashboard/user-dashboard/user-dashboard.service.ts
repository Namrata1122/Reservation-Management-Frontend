import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserDashboardService{
    private loadReservationsSubject = new Subject<void>();
    callLoadReservations$ = this.loadReservationsSubject.asObservable();

    private selectedReservationId = new BehaviorSubject<string|null>(null);
    setReservationId$ = this.selectedReservationId.asObservable();

    callLoadReservations(){
        this.loadReservationsSubject.next();
    }

    setReservationId(Id:any){
        this.selectedReservationId.next(Id);
    }
}