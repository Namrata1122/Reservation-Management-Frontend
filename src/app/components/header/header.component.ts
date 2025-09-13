import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  private userSub! :Subscription;

  authService: AuthService = inject(AuthService);
  router:Router = inject(Router);

  ngOnInit(): void {
   this.userSub = this.authService.user$.subscribe((user)=>{
    this.isLoggedIn = !!user;
    this.isAdmin = user?.role === 'admin';
   })
  }

  Logout(){
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if(this.userSub){
      this.userSub.unsubscribe();
    }
  }
}
