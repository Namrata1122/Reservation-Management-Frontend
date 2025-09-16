import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/Services/resources.service';
import { Resource } from 'src/Models/resource';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent {
  createResourceForm:NgForm;
  resource:Resource;

  resourceService: ResourcesService = inject(ResourcesService);
  router:Router = inject(Router)

  OnCreateResourceClicked(resourceForm: NgForm){
    this.createResourceForm = resourceForm;
    this.resource = this.createResourceForm.value;
    console.log(this.resource);

    this.resourceService.CreateResource(this.resource).subscribe({
      next:(response)=>{
        console.log("Resource Added!",response);
        alert("Resource Added!");
        this.createResourceForm.reset();
        this.router.navigate(['/resources']);
      },
      error:(err)=>{
        console.log(err);
        alert("Resource could not be added!");
        this.createResourceForm.reset();
      }
    })
  }
}
