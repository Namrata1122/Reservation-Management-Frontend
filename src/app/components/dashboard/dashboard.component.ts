import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  authService:AuthService = inject(AuthService);
  router:Router = inject(Router);

  ngOnInit():void{
    const user = this.authService.getUserFromToken();
    console.log('Logged-In User: ',user);
    if(user && user.role === 'admin'){
      this.router.navigate(['/admindashboard']);
    }else if(user && user.role === 'user'){
      this.router.navigate(['/userdashboard']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
