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
  providers: [AuthJsonService],
  templateUrl: 'myProfile.component.html'
})
export class MyProfileComponent {
  private pageHeaderName = "MyProfile";
  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;
  error : string;

  //profile variables
  userName:string;
  firstName:string;
  lastName:string;
  identificationNo:string;
  houseNo:string;
  address_1:string;
  address_2:string;
  email:string;
  phone_home:string;
  phone_mobile:string;

  private vehicleRegs = [
    { ownername: 'Vishnu Serghei', vehicleno: 'WWQ 7765', model: 'BMW X3', color: 'White'},
    { ownername: 'Zbyněk Phoibos', vehicleno: 'ABC 1234', model: 'Mercedes C250', color: 'Black'},
    { ownername: 'Einar Randall', vehicleno: 'RF 1002', model: 'Proton Perdana', color: 'Blue'},
    { ownername: 'Félix Troels', vehicleno: 'JKL 2222', model: 'Produa Myvi', color: 'Silver'},
    { ownername: 'Aulus Agmundr', vehicleno: 'WWW 6666', model: 'Toyota Vios', color: 'Orange'},
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

      
      let userInfo = JSON.parse(this._service.getUserInfo());
      //if(!userInfo == null){
        console.log("getUserInfo response : " + userInfo.id)

        this.userName=userInfo.first_name + " " + userInfo.last_name;
        this.firstName=userInfo.first_name;
        this.lastName=userInfo.last_name;
        this.identificationNo=userInfo.identification;
        this.houseNo=userInfo.house_no;
        this.address_1=userInfo.address_1;
        this.address_2=userInfo.address_2;
        this.email=userInfo.email;
        this.phone_home=userInfo.phone_home;
        this.phone_mobile=userInfo.phone_mobile;
      //}
          

      
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
