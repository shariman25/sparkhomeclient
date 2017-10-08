import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';

import { InputService } from './../../services/input.service';
import { ApiJsonService } from './../../services/api.service.json';

@Component({
  templateUrl: 'audittrail.api.component.html',
  providers: [InputService, ApiJsonService]
})
export class AuditTrailApiComponent {

  error: string;
  private jsonSend: string;
  private jsonReceive: string;
  private assestUrl = "./assets/input/";

  private optionAction = [
    { id: 1, action: 'POST' },
    { id: 2, action: 'GET' },
  ];
  defaultOptionAction = null;

  private optionApi = [
    { id: 1, api: '/user/create' },
    { id: 2, api: '/user/update' },
    { id: 3, api: '/user/profile/upload' },
    { id: 4, api: '/user/login' },
    { id: 5, api: '/user/logout' },
    { id: 6, api: '/user/info' },
    { id: 7, api: '/user/profile/changepwd' },
    { id: 8, api: '/vehicle/create' },
    { id: 9, api: '/vehicle/photo/upload' },
    { id: 10, api: '/vehicle/list' },
    { id: 11, api: '/vehicle/edit' },
    { id: 12, api: '/vehicle/del' },
    { id: 13, api: '/session/check' },
    { id: 14, api: '/session/all' },
  ];
  defaultOptionApi = null;

  constructor(
    private http: Http,
    private _router: Router,
    private _inputService: InputService,
    private _apiService: ApiJsonService,
  ) { }

  ngOnInit() {
    //this.jsonSend = "lololo";
  }


  public updateJsonSend(value) {
    console.log("value : " + value);
    let json;

    this.jsonSend = "";

    if (value > 0) {
      if (value == 1) {
        this._inputService.user_create()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 2) {
        this._inputService.user_update()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 3) {
        this._inputService.user_upload()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 4) {
        this._inputService.login()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 5) {
        this._inputService.logout()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 6) {
        this._inputService.user_info()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 7) {
        this._inputService.user_changepwd()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 8) {
        this._inputService.vehicle_create()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 9) {
        this._inputService.vehicle_upload()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 10) {
        this._inputService.vehicle_list()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 11) {
        this._inputService.vehicle_edit()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 12) {
        this._inputService.vehicle_delete()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 13) {
        this._inputService.session_check()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else
      if (value == 14) {
        this._inputService.session_all()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonSend = JSON.stringify(json);
          });
      } else {

      }
    }
  }

  public onSubmit(form: NgForm) {
    var jsonReq = JSON.stringify(form.value);
    this.jsonReceive = "";
    console.log("value : " + jsonReq);
    console.log("selected : " + form.value.select_api);

    let json;
    let value = form.value.select_api;
    if (value > 0) {
      if (value == 1) {
        this._apiService.create_Succes()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 2) {
        this._apiService.update_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 3) {
        //profile upload
      } else
      if (value == 4) {
        this._apiService.login_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 5) {
        this._apiService.logout_Success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 6) {
        this._apiService.info_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 7) {
        this._apiService.changepwd_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 8) {
        this._apiService.vehicleCreate_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 9) {
        //photo upload
      } else
      if (value == 10) {
        this._apiService.vehicleList_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 11) {
        this._apiService.vehicleEdit_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 121) {
        this._apiService.vehicleDelete_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 13) {
        this._apiService.sessionCheck_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else
      if (value == 14) {
        this._apiService.sessionAll_success()
          .map((response: any) => json = response)
          .subscribe(data => {
            console.log("res : " + JSON.stringify(json));
            this.jsonReceive = JSON.stringify(json);
          });
      } else {

      }
    }

  }


}
