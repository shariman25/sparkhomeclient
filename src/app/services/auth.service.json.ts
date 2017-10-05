import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { JwtHelper } from 'angular2-jwt';

//import { ApiService } from './api.service';
import { ApiJsonService } from './api.service.json';

@Injectable()
export class AuthJsonService {
    loggedIn = false;
    isAdmin = false;

    //jwtHelper: JwtHelper = new JwtHelper();

    currentUser = { _id: '', username: '', role: '' };



    constructor(private _apiService: ApiJsonService,
        private _router: Router) {
        // const token = localStorage.getItem('token');
        // if (token) {
        //   const decodedUser = this.decodeUserFromToken(token);
        //   this.setCurrentUser(decodedUser);
        // }
    }

    //private json;
    public login(emailAndPassword) {
        return this._apiService.login_success()
        //return this._apiService.login_Error()
            .map((response: any) => {
                var data = response[0];
                localStorage.setItem("user", JSON.stringify(data));
                //var obj1 = JSON.parse(response);
                //console.log("obj = " + data.id);
                //var json = response.;
                //console.log("login1 json = " + response.id);
                return data;
            });
    }

    public logout() {
        console.log("logout");
        localStorage.removeItem("user");
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

    setCurrentUser(decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    }

}
