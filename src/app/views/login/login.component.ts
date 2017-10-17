import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs';
import { Headers } from '@angular/http';
import { AuthenticationService } from './../../auth/authentication.service';
import { httpApiService } from './../../http/http.api.service';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../../services/auth.service';

import { AuthJsonService } from './../../services/auth.service.json';
import { ApiJsonService } from './../../services/api.service.json';

//import { AppSidebar } from './../../components/app-sidebar/app-sidebar.component';




@Component({
  selector: 'login-form',
  providers: [
    AuthenticationService,
    httpApiService,
    AuthService,
    ApiJsonService,
    AuthJsonService
  ],
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  error: any;
  jsonObj: string;

  currentUser = { _id: '', username: '', role: '' };

  constructor(
    private _authService: AuthenticationService,
    //private _auth: AuthService,
    private _auth: AuthJsonService,
    private _router: Router
    //private _appSidebar: AppSidebar
  ) { }
  // constructor(private http: Http) {

  // }

  //private json;
  login(form: NgForm) {
    let json;
    this._auth.login(form.value)
      .map((response: any) => json = response)
      .subscribe(data => {
        if (data.status != null) {
          console.log("login failed = " + data.status);
          this.error = 'Invalid Credential';
        } else if (data.id > 0) {
          console.log("login success with id = "
            + data.id + " "
            + data.first_name + " "
            + data.email);
          this._router.navigate(['']);
        }

      },
      error => {
        console.log(error)
      });

    //error => this.error = 'Failed to login'
    //);
  }

  onSubmit(form: NgForm) {



    //TODO : validation
    // call authentication service
    var jsonReq = JSON.stringify(form.value);

    // this.videoserv.getvideos(jsonReq)
    // .subscribe();//responce => this.videos = responce);

    // var authenticated = this._authService.test(jsonReq)
    // .subscribe();


    var authenticated = this._authService.login(jsonReq);
    if (!authenticated) {
      console.log("login success");
    } else {
      console.log("Failed to login");
      this.error = 'Failed to login';
    }

    // if(!this._authService.login(jsonReq)){
    //   console.log("login success");
    // }else{
    //   console.log("Failed to login"); 
    //   this.error = 'Failed to login';
    // }

    // this._authService.login(jsonReq)
    //   //.subscribe(data => console.log(data));

    //   .subscribe(data => data);
    //   //{
    //   //   console.log(responce)
    //   //  var json = responce["_body"];
    //   //  console.log("json = " + json);
    //   //  this._router.navigate(['']); 
    //   //}

    // );

    console.log("json finish");


    //console.log("login json  = " + json);
    // if(!this._authService.login(jsonReq)){
    //   console.log("Failed to login"); 
    //     this.error = 'Failed to login';
    // }


    // call API
    // let headers = new Headers({ 'Content-Type': 'application/json' });

    // let options = new RequestOptions({ headers: headers });


    // //var jsonReq = JSON.stringify(form.value);

    // console.log("json req = " + jsonReq);

    // const req = this.http.post('http://localhost:8000/api/user/login', jsonReq,options);
    // req.subscribe(data => {
    //   var json = data["_body"];
    //   console.log("json = " + json);

    //   var obj = JSON.parse(json);
    //   console.log("obj = " + obj);
    //   console.log("success = " + obj.success);

    //   this.error = obj.fail_reason;
    // });




  }
}
