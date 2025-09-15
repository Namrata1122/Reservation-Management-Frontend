import { Component, inject } from '@angular/core';
import { ResourcesService } from 'src/app/Services/resources.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  resources:any[] = [];
    currentIndex = 0;
    itemsPerView = 3;
    visibleResources:any[]=[];

    selectedResource : any;
    showCreateReservation : boolean = false;
  
    resourcesService:ResourcesService = inject(ResourcesService);
  
    ngOnInit(){
      this.resourcesService.GetResourcesList().subscribe(data=>{
        this.resources=data.resources;
        this.UpdateVisibleResources();
      })
    }
  
    UpdateVisibleResources(){
      this.visibleResources = this.resources.slice(this.currentIndex,this.currentIndex+this.itemsPerView);
    }
  
    next(){
      if(this.currentIndex + this.itemsPerView < this.resources.length){
        this.currentIndex ++;
        this.UpdateVisibleResources();
      }
    }
  
    prev(){
      if(this.currentIndex > 0){
        this.currentIndex--;
        this.UpdateVisibleResources();
      }
    }

    OnReserveClicked(resource:any){
      this.showCreateReservation = true;
      this.selectedResource = resource;
    }
}
