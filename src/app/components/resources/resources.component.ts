import { Component, inject, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit{
  resourcesService:ResourcesService = inject(ResourcesService);
  resources : any[] = [];

  ngOnInit(): void {
    this.resourcesService.GetResourcesList().subscribe((response)=>{
      this.resources = response.resources;
    })
  }
  
}
