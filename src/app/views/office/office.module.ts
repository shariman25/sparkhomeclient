import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OfficeRoutingModule } from './office-routing.module';

import { ManagementActivityComponent } from './management.activity.component';

@NgModule({
  imports: [
    OfficeRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [ 
    ManagementActivityComponent
    ]
})
export class OfficeModule { }
