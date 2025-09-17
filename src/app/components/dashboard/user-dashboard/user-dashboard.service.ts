import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserDashboardService{
    private loadResourcesSubject = new Subject<void>();

    callLoadResource$ = this.loadResourcesSubject.asObservable();

    callLoadResource(){
        this.loadResourcesSubject.next();
    }
}