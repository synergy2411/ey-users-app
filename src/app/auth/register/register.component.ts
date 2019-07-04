import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  onSubmit(f : NgForm){
    console.log("Username : ", f.value.username);
    console.log("Password : ", f.value.password);
  }
}