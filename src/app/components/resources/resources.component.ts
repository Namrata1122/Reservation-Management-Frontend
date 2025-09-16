import { Component, inject, OnInit } from '@angular/core';
import { ResourcesService } from '../../Services/resources.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Resource } from 'src/Models/resource';

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

  updatingResources:boolean = false;
  updateResourceForm:NgForm;
  data:Resource;
  resourceId:string;
  selectedResource = {
    name:'',
    description:'',
    capacity:0,
    location:'',
    price:0,
    img:''
  }

  router:Router = inject(Router)

  ngOnInit(): void {
    this.loadResources()

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
      this.loadResources();
    })
  }

  OnUpdateClicked(Id:string){
    this.updatingResources = true;
    this.resourceId = Id;
    this.selectedResource = this.resources.find(res => res._id ===  Id);
  }

  OnUpdateResourceClicked(form:NgForm){
    this.updateResourceForm = form;
    console.log(this.updateResourceForm)
    this.data = this.updateResourceForm.value;
    this.resourcesService.UpdateResource(this.resourceId,this.data).subscribe({
      next:(response)=>{
        console.log("Resource Updated!",response);
        alert("Resource Updated!");
        this.updateResourceForm.reset();
        this.updatingResources = false;
        this.loadResources();
      },
      error:(err)=>{
        console.log(err);
        alert("Resource could not be updated!");
        this.updateResourceForm.reset();
        this.updatingResources = false;
        this.loadResources();
      }
    })
  }

  loadResources(){
    this.resourcesService.GetResourcesList().subscribe((response)=>{
      this.resources = response.resources;
      console.log(this.resources)
    })
  }
}
