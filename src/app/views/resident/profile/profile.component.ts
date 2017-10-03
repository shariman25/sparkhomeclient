import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import {Headers} from '@angular/http';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  error : string;

  constructor(
    private http: Http,
    private _router: Router,
  ) {

  }

  backClicked() {
    console.log("back click");
    this._router.navigate(['login']);
  }

  onSubmit(form: NgForm) {

    

    //TODO : validation


    // call API
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    var jsonReq = JSON.stringify(form.value);

    console.log("json req = " + jsonReq);

    const req = this.http.post('http://localhost/api/user/create', jsonReq,options);
    req.subscribe(data => {
      var json = data["_body"];
      console.log("json = " + json);

      var obj = JSON.parse(json);
      console.log("obj = " + obj);
      console.log("success = " + obj.success);

      this.error = obj.fail_reason;
    });




  }


}
