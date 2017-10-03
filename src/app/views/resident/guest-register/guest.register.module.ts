import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { GuestRegisterComponent } from './guest.register.component';
import { GuestRegisterRoutingModule } from './guest.register-routing.module';

@NgModule({
  imports: [
    GuestRegisterRoutingModule,
    FormsModule 
  ],
  declarations: [ GuestRegisterComponent ]
})
export class GuestRegisterModule { }
