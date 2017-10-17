import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthJsonService } from './../../services/auth.service.json';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  username: string;

  constructor(
    private el: ElementRef,
    private _router: Router,
    private _auth: AuthJsonService
  ) { }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);

    this.username = this._auth.getUsername();
    if(this.username == null){
      this._router.navigate(['login']);
    } else {
      this._router.navigate(['']);
    }
  }

  logout() {
    console.log("logout click");
    this._auth.logout();
  }
}
