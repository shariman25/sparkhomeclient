import { Component } from '@angular/core';
import {LoginComponent} from './views/login/login.component';
import {AuthenticationService} from './auth/authentication.service';
import {httpApiService} from './http/http.api.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  providers: [AuthenticationService, httpApiService],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { 
  constructor(
    private _service:AuthenticationService){}

  ngOnInit(){
      this._service.checkCredentials();
  }

  logout() {
      this._service.logout();
  }
}
