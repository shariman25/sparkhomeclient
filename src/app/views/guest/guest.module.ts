import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { GuestRegComponent } from './guest.reg.component';

import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  imports: [
    GuestRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [ 
      GuestRegComponent
    ]
})
export class GuestModule { }
