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
    Validators.minLength(6)
  ]);
  loginForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.loginForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onLogin(){
    console.log("Username : ", this.loginForm.value.username);
    console.log("Password : ", this.loginForm.value.password);
  }

}
