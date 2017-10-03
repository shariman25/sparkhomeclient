import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/Map';
import {httpApiService} from './../http/http.api.service';
import {User} from './../models/user';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import {Headers} from '@angular/http';
 
@Injectable()
export class AuthenticationService {
  private json;
    
  constructor(
    private _router: Router,
    private _ApiService:httpApiService
    ){}
  
    logout() {
      console.log("logout");
      localStorage.removeItem("user");
      this._router.navigate(['login']);
    }

    test(jsonReq){
      var test = this.json;
      return test
    }
 
    login(jsonReq) {
      this._router.navigate(['']);
      // this._ApiService.httpApiCreate(jsonReq)
      // .map((response:Response) => this.json = response)
      // .subscribe(data => {
      //   this.json = data["_body"];
      //   console.log("json = " + this.json);

      //   if(this.json != null){
      //     localStorage.setItem("user", JSON.stringify(this.json));
      //   }
      //   this._router.navigate(['']); 
      //   // var obj = JSON.parse(this.json);
      //   // console.log("user = " + obj);
      //   // console.log("success = " + obj.first_name);
      //   return this.json;
      //  //this._router.navigate(['']); 
      //});





      //var test = this.json;
      //return this.json;
      // this._ApiService.httpApiCreate(jsonReq)
      // //.map((response:Response) => response.json());
      // .map((data:Response) => data)
      // .subscribe(data => {
      //   this.json = data["_body"];
      //   console.log("json = " + this.json);
      //   //return this.json;
      //  //this._router.navigate(['']); 
      // });
      //return false;

      // this._ApiService.httpApiCreate(jsonReq)
      // .map((response:Response) => this.json = response)
      // .subscribe((response:Response) => {
      //   var json = response["_body"];
      //   console.log("json = " + json);
      //   return true;
      // })

      // return this.http.post('http://localhost:8000/api/user/login', jsonReq,options)
      // //.map((response:Response) => response.json());
      // .map((response:Response) => response) ;
    }
  
    checkCredentials(){
      console.log("checkCredentials");
      if (localStorage.getItem("user") === null){
        console.log("user non exist");
          this._router.navigate(['login']);
      }else{
        console.log("user exist");
      }
    } 
 
  // login1(jsonReq){
  //   console.log("auth request json = " + jsonReq);  


  //   let headers = new Headers({ 
  //     'Content-Type': 'application/json',
  //     'Accept': '*/*'
    
  //   });

  //   let options = new RequestOptions({ headers: headers });
    
  //       console.log("http api request json  = " + jsonReq);
    
  //        const req = this.http.post('http://localhost:8000/api/user/login', jsonReq,options);
  //       req.subscribe(data => {
  //         var json = data["_body"];
  //         console.log("http received json = " + json);
    
  //         // var obj = JSON.parse(json);
  //         // console.log("obj = " + obj);
  //         // console.log("success = " + obj.success);
    
  //         // this.error = obj.fail_reason;
  //         return json;
  //       });
      

   

  //   // var json = this._apiService.httpCall(jsonReq)
  //   // console.log("auth received json = " + json); 
  //   // //return json
  //   // //check json success
  //   // if(json != null){
  //   //     localStorage.setItem("user", JSON.stringify(json));
  //   //     //this._router.navigate(['Home']);   
          
  //   //     return true;
  //   // }else{
  //   //     return false;
  //   // }
  // }
 
   
}