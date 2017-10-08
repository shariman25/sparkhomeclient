import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AuditTrailJsonComponent } from './audittrail.json.component';
import { AuditTrailApiComponent } from './audittrail.api.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: AuditTrailComponent,
//     data: {
//       title: 'AuditTrail'
//     }
//   }
// ];

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'AuditTrails'
    },
    children: [
      {
        path: 'json',
        component: AuditTrailJsonComponent,
        data: {
          title: 'Json'
        }
      },
      {
        path: 'api',
        component: AuditTrailApiComponent,
        data: {
          title: 'Api'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTrailRoutingModule {}
