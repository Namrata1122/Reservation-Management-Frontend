import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGaurdService implements CanActivate{
    constructor(
        private authService:AuthService = inject(AuthService),
        private router:Router
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const expectedRole = route.data['expectedRole'];
        const user = this.authService.getUserFromToken();
        
        if(user && user.role === expectedRole){
            return true;
        }

        console.log('Access Denied - redirecting to login');
        this.router.navigate(['/login']);
        return false;
    }

}