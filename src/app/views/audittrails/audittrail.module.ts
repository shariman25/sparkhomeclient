import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuditTrailJsonComponent } from './audittrail.json.component';
import { AuditTrailApiComponent } from './audittrail.api.component';

import { AuditTrailRoutingModule } from './audittrail-routing.module';

@NgModule({
  imports: [
    AuditTrailRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ 
    AuditTrailJsonComponent,
    AuditTrailApiComponent
   ]
})
export class AuditTrailModule { }
