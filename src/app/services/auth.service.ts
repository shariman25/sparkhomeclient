import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from './angular2-jwt';

import { ApiService } from './api.service';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = { _id: '', username: '', role: '' };

  constructor(private _apiService: ApiService,
    private _router: Router) {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const decodedUser = this.decodeUserFromToken(token);
    //   this.setCurrentUser(decodedUser);
    // }
  }

  public login(emailAndPassword) {
    console.log("emailAndPassword = " + emailAndPassword);
    return this._apiService.login(emailAndPassword)
      .map((response: any) => {
        var data = response["_body"];
        localStorage.setItem("user", JSON.stringify(data));
        console.log("response = " + data);
        
        var obj = JSON.parse(data);
        console.log("response.token = " + obj.api_token);
        //const decodedUser = this.decodeUserFromToken(obj.api_token);
        this.setCurrentUser(obj);
        return obj;
      });
  }

  public logout() {
    console.log("logout");
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  public checkCredentials() {
    console.log("checkCredentials");
    if (localStorage.getItem("user") === null) {
      console.log("user non exist");
      this._router.navigate(['login']);
    } else {
      console.log("user exist");
    }
  }

  setCurrentUser(obj) {
    this.loggedIn = true;
    this.currentUser._id = obj._id;
    this.currentUser.username = obj.username;
    this.currentUser.role = obj.role;
    console.log("currentUser : " + this.currentUser._id + " " + this.currentUser.username + " " + this.currentUser.role)
    obj.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    //delete decodedUser.role;
  }

  // login(emailAndPassword) {
  //   console.log("res : " + emailAndPassword)
  //   return this.apiService.login(emailAndPassword).map(res => res.json()).map(
  //     res => {
  //       console.log("res : " + res)
  //       // localStorage.setItem('token', res.token);
  //       // const decodedUser = this.decodeUserFromToken(res.token);
  //       // this.setCurrentUser(decodedUser);
  //       //return this.loggedIn;
  //     }
  //   );
  // }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.loggedIn = false;
  //   this.isAdmin = false;
  //   this.currentUser = { _id: '', username: '', role: '' };
  //   this.router.navigate(['/']);
  // }

    // decodeUserFromToken(token) {
    //   return this.jwtHelper.decodeToken(token).user;
    // }

  // setCurrentUser(decodedUser) {
  //   this.loggedIn = true;
  //   this.currentUser._id = decodedUser._id;
  //   this.currentUser.username = decodedUser.username;
  //   this.currentUser.role = decodedUser.role;
  //   console.log("currentUser : " + this.currentUser._id + " " + this.currentUser.username + " " + this.currentUser.role)
  //   decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
  //   delete decodedUser.role;
  // }

}
