import { Component, ElementRef } from '@angular/core';
import {AuthenticationService} from './../../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  constructor(
    private el: ElementRef,
    private _service:AuthenticationService
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
  }

    logout() {
      console.log("logout click");
      this._service.logout();
  }
}
