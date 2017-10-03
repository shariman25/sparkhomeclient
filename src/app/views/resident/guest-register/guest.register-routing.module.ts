import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { GuestRegisterComponent } from './guest.register.component';

const routes: Routes = [
  {
    path: '',
    component: GuestRegisterComponent,
    data: {
      title: 'GuestRegistration'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRegisterRoutingModule {}
