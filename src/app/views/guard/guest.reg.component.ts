import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import {Headers} from '@angular/http';
import { AuthJsonService } from './../../services/auth.service.json';

@Component({
  templateUrl: 'guest.reg.component.html',
  providers: [AuthJsonService]
})
export class GuestRegComponent {
  private pageHeaderName = "Guest";
  error : string;

  private guestRegs = [
    { guestname: 'Vishnu Serghei', vehicleno: 'WWQ 7765', phoneno: '012 1234567', timein: '8.30am', status: 'Visitor'},
    { guestname: 'Zbyněk Phoibos', vehicleno: 'ABC 1234', phoneno: '019 8765432', timein: '2.15pm', status: 'OverNight'},
    { guestname: 'Einar Randall', vehicleno: 'RF 1002', phoneno: '012 1234567', timein: '5.45pm', status: 'OverNight'},
  ];

  constructor(
    private http: Http,
    private _router: Router,
    private _service: AuthJsonService
  ) {

  }

  ngOnInit() {
    this._service.checkRole(this.pageHeaderName)
      .subscribe(response => {
        if (!response) {
          this._router.navigate(['']);
        }
      });
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
