import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//import { JwtHelper } from 'angular2-jwt';

//import { ApiService } from './api.service';
import { ApiJsonService } from './api.service.json';

@Injectable()
export class AuthJsonService {
    loggedIn = false;
    isAdmin = false;
    private accessUrl = "./assets/access/";

    //jwtHelper: JwtHelper = new JwtHelper();

    currentUser = { _id: '', username: '', role: '' };



    constructor(
        private _apiService: ApiJsonService,
        private _router: Router,
        private http: Http

    ) {
        // const token = localStorage.getItem('token');
        // if (token) {
        //   const decodedUser = this.decodeUserFromToken(token);
        //   this.setCurrentUser(decodedUser);
        // }
    }

    //private json;
    public login(emailAndPassword) {
        return this._apiService.login_success(emailAndPassword.email)
            //return this._apiService.login_Error()
            .map((response: any) => {
                var data = response[0];
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("role", data.role);
                localStorage.setItem("username", data.first_name + " " + data.role);
                //var obj1 = JSON.parse(response);
                //console.log("obj = " + data.id);
                //this.setCurrentUser(data);
                //var json = response.;
                //console.log("login1 json = " + response.id);
                return data;
            });
    }

    public logout() {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        this._router.navigate(['login']);
    }

    public checkCredentials() {
        console.log("checkCredentials");
        if (localStorage.getItem("user") === null) {
            console.log("user non exist");
            this._router.navigate(['login']);
        } else {
            console.log("user exist");
        }
    }

    setCurrentUser(obj) {
        this.loggedIn = true;
        this.currentUser._id = obj.id;
        this.currentUser.username = obj.first_name;
        this.currentUser.role = obj.role;
        console.log("currentUser : " + this.currentUser._id + " " + this.currentUser.username + " " + this.currentUser.role)
        //obj.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    }

    public getRole() {
        console.log("getRole : " + localStorage.getItem("role"))
        return localStorage.getItem("role");
    }

    public getUsername() {
        console.log("username : " + localStorage.getItem("username"))
        return localStorage.getItem("username");
    }

    public getUserInfo() {
        console.log("getUserInfo : " + localStorage.getItem("user"))
        return localStorage.getItem("user");
    }

    public checkRole(headerName) {
        return this.getAccess()
            .map((response: any) => {
                let role = this.getRole();
                if (role === 'admin') {
                    for (let i = 0; i < response.admin.length; ++i) {
                        if (headerName === response.admin[i]) {
                            return true;
                        }
                    }
                } else if (role === 'management') {
                    for (let i = 0; i < response.management.length; ++i) {
                        if (headerName === response.management[i]) {
                            return true;
                        }
                    }
                } else if (role === 'resident') {
                    for (let i = 0; i < response.resident.length; ++i) {
                        if (headerName === response.resident[i]) {
                            return true;
                        }
                    }
                }
                return false;
            });
    }

    public getAccess(): Observable<any> {
        return this.http.get(this.accessUrl + "access.json")
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => error);
    }


    //   login(emailAndPassword) {
    //     console.log("call : " + emailAndPassword)
    //     return this.apiService.login()
    //         //.map((response:Response) => response)
    //         .map((response:Response) => this.json = response)
    //         .subscribe(data => {
    //             this.json = data["_body"];
    //             console.log("json = " + this.json);
    //             return this.json;
    //         }, 
    //         error => {
    //             console.log(error)
    //         });
    //     //this.getJSON().subscribe(data => obj=data, error => console.log(error));
    //     //return this.apiService.login(emailAndPassword);

    //   }

    //   login(emailAndPassword) {
    //     console.log("call : " + emailAndPassword)
    //     return this.apiService.login(emailAndPassword)
    //         .map((res:JSON) => res);
    //   }

    // logout() {
    //     localStorage.removeItem('token');
    //     this.loggedIn = false;
    //     this.isAdmin = false;
    //     this.currentUser = { _id: '', username: '', role: '' };
    //     this.router.navigate(['/']);
    // }

    //   decodeUserFromToken(token) {
    //     return this.jwtHelper.decodeToken(token).user;
    //   }

    // setCurrentUser(decodedUser) {
    //     this.loggedIn = true;
    //     this.currentUser._id = decodedUser._id;
    //     this.currentUser.username = decodedUser.username;
    //     this.currentUser.role = decodedUser.role;
    //     decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    //     delete decodedUser.role;
    // }

}
