import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ManagementActivityComponent } from './management.activity.component';
import { ManagementActivityRoutingModule } from './management.activity-routing.module';

@NgModule({
  imports: [
    ManagementActivityRoutingModule,
    FormsModule 
  ],
  declarations: [ ManagementActivityComponent ]
})
export class ManagementActivityModule { }
