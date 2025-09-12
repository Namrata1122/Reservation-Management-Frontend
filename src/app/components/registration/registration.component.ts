import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  currentStep = 1;

  registrationService = inject(RegistrationService)

  // final registration object
  registrationData:any ={
    firstname:'',
    lastname:'',
    email:'',
    dob:'',
    gender:'',
    username:'',
    password:''
  }

  GoToStep(step:number){
    this.currentStep = step;
  }

  OnSubmitForm(){
    console.log(this.registrationData);
    this.registrationData.dob = new Date(this.registrationData.dob);
    this.registrationService.registerUser(this.registrationData).subscribe({
      next:(response)=>{
        console.log("User Registered Successfully",response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
