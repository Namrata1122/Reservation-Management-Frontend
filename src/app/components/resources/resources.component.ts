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

  private user:any;
  isAdmin :boolean = false;
  isUser : boolean = false;

  router:Router = inject(Router)

  ngOnInit(): void {
    this.resourcesService.GetResourcesList().subscribe((response)=>{
      this.resources = response.resources;
      console.log(this.resources)
    })

    this.user = this.authService.getUserFromToken();
    if(this.user.role === 'admin'){
      this.isAdmin = true;
    }else{
      this.isUser = true;
    }
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
  OnDeleteClicked(resourceId: string){
    this.resourcesService.DeleteResource(resourceId).subscribe(response=>{
      console.log(response);
      alert(`Deleted ${response.resource.name}`)
      this.resources = this.resources.filter(resource => resource._id !==resourceId);
    })
  }
}
