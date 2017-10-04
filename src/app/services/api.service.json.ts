import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiJsonService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    private assestUrl = "./assets/data/";

    constructor(private http: Http) { }

    public create_Succes(): Observable<any> {
        return this.http.get(this.assestUrl + "create_Success.json")
            .map((response: Response) => {
                return response.json(); //pass json body
            })
            .catch((error: any) => error);//console.log(error));
    }

    public create_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "create_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public update_success(): Observable<any> {
        return this.http.get(this.assestUrl + "update_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public update_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "update_Error.json")
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => error);
    }

    public login_success(): Observable<any> {
        return this.http.get(this.assestUrl + "login_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public login_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "login_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public logout_Success(): Observable<any> {
        return this.http.get(this.assestUrl + "logout_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public info_success(): Observable<any> {
        return this.http.get(this.assestUrl + "info_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public info_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "info_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public changepwd_success(): Observable<any> {
        return this.http.get(this.assestUrl + "changepwd_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public changepwd_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "changepwd_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleCreate_success(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleCreate_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleCreate_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleCreate_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleList_success(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleList_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleList_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleList_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleEdit_success(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleEdit_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleEdit_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleEdit_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleDelete_success(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleDelete_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public vehicleDelete_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "vehicleDelete_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public sessionCheck_success(): Observable<any> {
        return this.http.get(this.assestUrl + "sessionCheck_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public sessionCheck_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "sessionCheck_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public sessionAll_success(): Observable<any> {
        return this.http.get(this.assestUrl + "sessionAll_Success.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }

    public sessionAll_Error(): Observable<any> {
        return this.http.get(this.assestUrl + "sessionAll_Error.json")
            .map((response: Response) => {
                return response.json(); 
            })
            .catch((error: any) => error);
    }
}
