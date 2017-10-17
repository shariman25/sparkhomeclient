import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ManagementActivityComponent } from './management.activity.component';
import { GuestRegComponent } from './guest.reg.component';

import { GuardRoutingModule } from './guard-routing.module';

@NgModule({
  imports: [
    GuardRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [ 
    ManagementActivityComponent,
    GuestRegComponent
    ]
})
export class GuardModule { }
