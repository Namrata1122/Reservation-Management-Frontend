import { Component, inject, OnInit } from '@angular/core';
import { ResourcesService } from '../../Services/resources.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit{
  resourcesService:ResourcesService = inject(ResourcesService);
  resources : any[] = [];

  authService:AuthService = inject(AuthService);
  private token:any = null;

  router:Router = inject(Router)

  ngOnInit(): void {
    this.resourcesService.GetResourcesList().subscribe((response)=>{
      this.resources = response.resources;
    })
  }
  
  OnReserveClicked(event:Event){
    event.preventDefault();
    this.token = this.authService.getToken()
    if(this.token){
      this.router.navigate(['/userdashboard']);
    }else{ 
      this.router.navigate(['/login']);
    }
  }
}
