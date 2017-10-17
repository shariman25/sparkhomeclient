import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ManagementActivityComponent } from './management.activity.component';
import { ManagementActivityRoutingModule } from './management.activity-routing.module';

@NgModule({
  imports: [
    ManagementActivityRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [ ManagementActivityComponent ]
})
export class ManagementActivityModule { }
