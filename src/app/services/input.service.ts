import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InputService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    private assestUrl = "./assets/input/";

    constructor(private http: Http) { }

    public user_create(): Observable<any> {
        return this.http.get(this.assestUrl + "user_create.json")
            .map((response: Response) => {
                //console.log("return : " + response.json());
                return response.json(); //pass json body
            })
            .catch((error: any) => error);//console.log(error));
    }

    public user_update(): Observable<any> {
        return this.http.get(this.assestUrl + "user_update.json")
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => error);
    }

    public user_upload(): Observable<any> {
        return this.http.get(this.assestUrl + "user_upload.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public login(): Observable<any> {
        return this.http.get(this.assestUrl + "login.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public logout(): Observable<any> {
        return this.http.get(this.assestUrl + "logout.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public user_info(): Observable<any> {
        return this.http.get(this.assestUrl + "user_info.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public user_changepwd(): Observable<any> {
        return this.http.get(this.assestUrl + "user_changepwd.json")
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => error);
    }

    public vehicle_create(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicle_create.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicle_upload(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicle_upload.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicle_list(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicle_list.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicle_edit(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicle_edit.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicle_delete(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicle_delete.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public session_check(): Observable<any> {
        return this.http.get(this.assestUrl + "session_check.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public session_all(): Observable<any> {
        return this.http.get(this.assestUrl + "session_all.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }
}
