import { Component, ElementRef } from '@angular/core';

import { AuthJsonService } from './../../services/auth.service.json';

@Component({
  selector: 'app-sidebar',
  providers: [
    AuthJsonService,
    AppSidebar
  ],
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {

  constructor(
    private el: ElementRef,
    private _auth: AuthJsonService
  ) { }


  isResident = false;
  isGuest = false;
  isGuard = false;
  isManagement = false;
  isAuditTrail = false;
  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)

    this.isResident = false;
    this.isGuest = false;
    this.isGuard = false;
    this.isManagement = false;
    this.isAuditTrail = false;

    parentElement.removeChild(nativeElement);

    let role = this._auth.getRole();

    if (role === 'admin') {
      this.isManagement = true;
      this.isGuest = true;
      this.isAuditTrail = true;
    } else if (role === 'management') {
      this.isManagement = true;
      this.isGuest = true;
    } else if (role === 'resident') {
      this.isResident = true;
      this.isGuest = true;
    } else if (role === 'guard') {
      this.isManagement = true;
      this.isGuest = true;
    }
  }
}
