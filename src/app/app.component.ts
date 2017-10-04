import { Component } from '@angular/core';
import {LoginComponent} from './views/login/login.component';
import {AuthenticationService} from './auth/authentication.service';
import {httpApiService} from './http/http.api.service';
// import { AuthService } from './services/auth.service';
import { AuthJsonService } from './services/auth.service.json';
import { ApiJsonService } from './services/api.service.json';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  providers: [AuthenticationService, httpApiService, AuthJsonService, ApiJsonService],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { 
  constructor(
    private _service:AuthJsonService){}

  ngOnInit(){
      this._service.checkCredentials();
  }

  logout() {
      this._service.logout();
  }
}
