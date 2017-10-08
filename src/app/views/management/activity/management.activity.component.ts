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
  templateUrl: 'management.activity.component.html'
})
export class ManagementActivityComponent {

  error : string;
  
  
  private activities = [
    { name: 'Vishnu Serghei', vehicleno: 'WWQ 7765', timein: '8:30am', Status: 'Active'},
    { name: 'Zbyněk Phoibos', vehicleno: 'ABC 1234', timein: '10.01pm', Status: 'Banned'},
    { name: 'Einar Randall', vehicleno: 'RF 1002', timein: '12.01pm', Status: 'Inactive'},
    { name: 'Félix Troels', vehicleno: 'JKL 2222', timein: '2:45pm', Status: 'TimeOver'},
    { name: 'Aulus Agmundr', vehicleno: 'WWW 6666', timein: '4.20pm', Status: 'TimeOver'},
  ];

  private campers = [
    { username: 1, recent: 'POST', alltime: 'POST' },
    { username: 2, recent: 'GET', alltime: 'POST' },
  ];
  defaultOptionAction = null;

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
