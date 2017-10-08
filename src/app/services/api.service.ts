import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  private domainUrl = "http://localhost:8000";

  constructor(private http: Http) { }

  userCreate(userDetails): Observable<any> {
    return this.http.post(this.domainUrl + '/api/user/create', JSON.stringify(userDetails), this.options);
  }

  userUpdate(userDetails): Observable<any> {
    return this.http.post(this.domainUrl + '/api/user/update', JSON.stringify(userDetails), this.options);
  }

  login(credentials): Observable<any> {
    console.log("api login : " + JSON.stringify(credentials));
    return this.http.post(this.domainUrl + '/api/user/login', JSON.stringify(credentials), this.options);
  }

  logout(credentials): Observable<any> {
    return this.http.post(this.domainUrl + '/api/user/logout', JSON.stringify(credentials), this.options);
  }

  UserInfo(api_token): Observable<any> {
    //return this.http.get(this.domainUrl + '/api/user/info', JSON.stringify(api_token), this.options);
    return this.http.get(this.domainUrl + '/api/user/info').map(res => res.json());
  }

  userChangepwd(passwordDetails): Observable<any> {
    return this.http.post(this.domainUrl + '/api/user/profile/changepwd', JSON.stringify(passwordDetails), this.options);
  }

  vehicleCreate(vehicleDetails): Observable<any> {
    return this.http.post(this.domainUrl + '/api/vehicle/create', JSON.stringify(vehicleDetails), this.options);
  }

  VehicleList(api_token): Observable<any> {
    return this.http.post(this.domainUrl + '/api/vehicle/list', JSON.stringify(api_token), this.options);
  }

  vehicleEdit(carid, api_token): Observable<any> {
    return this.http.post(this.domainUrl + '/api/vehicle/edit/{' + carid + '}', JSON.stringify(api_token), this.options);
  }

  vehicleDelete(carid, api_token): Observable<any> {
    return this.http.post(this.domainUrl + '/api/vehicle/del/{' + carid + '}', JSON.stringify(api_token), this.options);
  }

  sessionCheck(api_token): Observable<any> {
    return this.http.get(this.domainUrl + '/api/session/check/?api_token=[' + api_token + ']').map(res => res.json());
  }

  sessionAll(api_token): Observable<any> {
    return this.http.get(this.domainUrl + '/api/session/all/?api_token=[' + api_token + ']').map(res => res.json());
  }

  //httpApiCreate(jsonReq){
    //return this.http.post('http://localhost:8000/api/user/login', jsonReq,this.options)
    //.map((response:Response) => response.json());
    //.map((response:Response) => response) ;
  //}

  //--------------------------------------------------------------------------------------------

  getCats(): Observable<any> {
    return this.http.get('/api/cats').map(res => res.json());
  }

  countCats(): Observable<any> {
    return this.http.get('/api/cats/count').map(res => res.json());
  }

  addCat(cat): Observable<any> {
    return this.http.post('/api/cat', JSON.stringify(cat), this.options);
  }

  getCat(cat): Observable<any> {
    return this.http.get(`/api/cat/${cat._id}`).map(res => res.json());
  }

  editCat(cat): Observable<any> {
    return this.http.put(`/api/cat/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat): Observable<any> {
    return this.http.delete(`/api/cat/${cat._id}`, this.options);
  }

}
