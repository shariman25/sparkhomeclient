import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs';
import {Headers} from '@angular/http';
import {AuthenticationService} from './../../auth/authentication.service';
import {httpApiService} from './../../http/http.api.service';
import { Observable } from 'rxjs/Rx';

import {VideoService} from './videoService';

@Component({
  selector: 'login-form',
  providers: [AuthenticationService, httpApiService],
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  error : string;
  jsonObj : string;
  
  constructor(
    private _authService:AuthenticationService,
    private _router: Router
  ) {}
  // constructor(private http: Http) {

  // }

  onSubmit(form: NgForm) {

    

    //TODO : validation
    // call authentication service
    var jsonReq = JSON.stringify(form.value);
    
    // this.videoserv.getvideos(jsonReq)
    // .subscribe();//responce => this.videos = responce);

    // var authenticated = this._authService.test(jsonReq)
    // .subscribe();


    var authenticated = this._authService.login(jsonReq);
    if(!authenticated){
      console.log("login success");
    }else{
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
