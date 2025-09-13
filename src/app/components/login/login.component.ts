import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUsingEmail:boolean = true;
  loginUsingUsername: boolean = false;
  loginForm:NgForm;

  data:{
    username?:string;
    email?:string;
    password:string;
  } = {
    password:''
  }

  loginService:LoginService = inject(LoginService);

  LoginUsingUsername(){
    this.loginUsingEmail = false;
    this.loginUsingUsername=true;
  }

  LoginUsingEmail(){
    this.loginUsingUsername = false;
    this.loginUsingEmail=true;

  }

  OnFormSubmitted(form:NgForm){
    this.loginForm= form;
    this.data = this.loginForm.value;
    this.loginService.LoginUser(this.data).subscribe({
      next:(response)=>{
        console.log("User LoggedIn Successfully",response);
        alert("User LoggedIn Successfully!");
        this.loginForm.reset();
      },
      error:(err)=>{
        console.log(err);
        alert("User Login Failed!");
        this.loginForm.reset();
      }
    })
  }
}
