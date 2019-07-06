import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username  = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark
  ]);
  loginForm : FormGroup;

  constructor(
      private fb : FormBuilder,
      private authService : AuthService){
    this.loginForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  hasExclamationMark(input : FormControl){
    const haveExclamation = input.value.indexOf("!") >= 0;
    return haveExclamation ? null : { hasExclamation : true }
  }

  onLogin(){
    console.log("Username : ", this.loginForm.value.username);
    console.log("Password : ", this.loginForm.value.password);
    this.authService.onLogin(
        this.loginForm.value.username,
        this.loginForm.value.password
        )
  }

}
