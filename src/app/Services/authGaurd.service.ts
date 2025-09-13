import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "../components/dashboard/dashboard.service";

@Injectable({
    providedIn:'root'
})
export class AuthGaurdService implements CanActivate{
    constructor(
        private dashboardService:DashboardService = inject(DashboardService),
        private router:Router
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const expectedRole = route.data['expectedRole'];
        const user = this.dashboardService.getUserFromToken();

        console.log('Expected Role: ',expectedRole);
        console.log('User Role: ',user?.role);
        
        if(user && user.role === expectedRole){
            return true;
        }

        console.log('Access Denied - redirecting to login');
        this.router.navigate(['/login']);
        return false;
    }

}