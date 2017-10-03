import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import {Headers} from '@angular/http';
 
@Injectable()
export class httpApiService {
 
  error : string;
  headers = new Headers({ 
    'Content-Type': 'application/json',
    'Accept': '*/*'
  
  });
  options = new RequestOptions({ headers: this.headers });

  public constructor(
    public http: Http
  ) {}

  

  httpApiCreate(jsonReq){
    return this.http.post('http://localhost:8000/api/user/login', jsonReq,this.options)
    //.map((response:Response) => response.json());
    //.map((response:Response) => response) ;
  }

  // httpCall(jsonReq){
  //   //feed jsonReq

  //   // call API
  //   let headers = new Headers({ 
  //     'Content-Type': 'application/json',
  //     'Accept': '*/*'
    
  // });
    
  //   let options = new RequestOptions({ headers: headers });

  //   console.log("http api request json  = " + jsonReq);

  //    const req = this.http.post('http://localhost:8000/api/user/login', jsonReq,options);
  //   req.subscribe(data => {
  //     var json = data["_body"];
  //     console.log("http received json = " + json);

  //     // var obj = JSON.parse(json);
  //     // console.log("obj = " + obj);
  //     // console.log("success = " + obj.success);

  //     // this.error = obj.fail_reason;
  //     return json;
  //   });
  // } 
}