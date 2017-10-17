import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MyProfileComponent } from './myProfile.component';
import { MyVehicleComponent } from './myVehicle.component';
import { GuestRegComponent } from './guest.reg.component';

import { ResidentRoutingModule } from './resident-routing.module';

@NgModule({
  imports: [
    ResidentRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [
    MyProfileComponent,
    MyVehicleComponent,
    GuestRegComponent
  ]
})
export class ResidentModule { }
