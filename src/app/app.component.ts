import { TestService } from './services/test.service';
import { CounterService } from './lazy/services/counter.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Users App';
  
  htmlSnippets = "Template : <script>alert('Hello')</script>";

  jsCode : string= "javascript:alert('Hello!')"
  safeCode : any;
  constructor(
    public dataService : DataService,
    public authService : AuthService,
    private sanitize : DomSanitizer,
    private cdRef : ChangeDetectorRef,
    public counterService : CounterService,
    public test : TestService){
      this.safeCode = this.sanitize.bypassSecurityTrustUrl(this.jsCode);
      // this.cdRef.detach()
    }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAQeDzIikV98IGbiDiwwC-ZGV8fBOAHeFs",
      authDomain: "ey-users-app.firebaseapp.com"
    })
  }

  onIncrease(){
    this.dataService.counter++;
    this.counterService.counter++;
    this.test.testCounter++;
  }

  onLogout(){
    this.authService.logout();
  }

}
