import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;

  dashboardService: DashboardService = inject(DashboardService);
  router:Router = inject(Router);

  ngOnInit(): void {
    const user = this.dashboardService.getUserFromToken();
    if(user){
      this.isLoggedIn = true;
    }
    if(user && user.role === 'admin'){
      this.isAdmin = true;
    }
  }

  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
