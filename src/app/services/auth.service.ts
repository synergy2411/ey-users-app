import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router'; 

@Injectable()
export class AuthService {
  
  token: string = null;

  onRegister(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log("Created"))
      .catch(err => console.log("ERROR", err))
  }

  onLogin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        // console.log("Logged In");
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            // console.log(token);
            this.token = token;
            this.router.navigate(["/users"]);
            // localStorage.setItem("token", token );
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log("ERROR", err))
  }

  getToken () {
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut()
    .then(response => {
      this.token = null;
      this.router.navigate(["/login"]);
    }).catch(err => console.log(err))
  }
  constructor(private router : Router) { }
}
