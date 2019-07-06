import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Users App';
  
  constructor(
    public dataService : DataService,
    public authService : AuthService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAQeDzIikV98IGbiDiwwC-ZGV8fBOAHeFs",
      authDomain: "ey-users-app.firebaseapp.com"
    })
  }

  onIncrease(){
    this.dataService.counter++;
  }

  onLogout(){
    this.authService.logout();
  }

}
