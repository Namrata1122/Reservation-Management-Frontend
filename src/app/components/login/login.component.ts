import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggingMode:boolean = true;

  OnSwitchMode(){
    this.isLoggingMode = !this.isLoggingMode;
  }

  OnFormSubmitted(form:NgForm){
    console.log(form);
  }

}
