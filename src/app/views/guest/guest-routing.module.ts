import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestRegComponent } from './guest.reg.component';

const routes: Routes = [
    {
      path: '',
      component: GuestRegComponent,
      data: {
        title: 'Guest'
      }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }
