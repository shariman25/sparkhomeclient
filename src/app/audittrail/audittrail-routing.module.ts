import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuditTrailComponent } from './audittrail.component';

const routes: Routes = [
  {
    path: '',
    component: AuditTrailComponent,
    data: {
      title: 'AuditTrail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTrailRoutingModule {}
