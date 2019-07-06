import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService : AuthService){}
  
  onSubmit(f : NgForm){
    // console.log("Username : ", f.value.username);
    // console.log("Password : ", f.value.password);
    this.authService.onRegister(f.value.username, f.value.password);

  }
}