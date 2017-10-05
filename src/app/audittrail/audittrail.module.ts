import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { AuditTrailComponent } from './audittrail.component';
import { AuditTrailRoutingModule } from './audittrail-routing.module';

@NgModule({
  imports: [
    AuditTrailRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ AuditTrailComponent ]
})
export class AuditTrailModule { }
