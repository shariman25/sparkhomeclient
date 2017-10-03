import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TimeComponent } from './time.component';
import { TimeRoutingModule } from './time-routing.module';

@NgModule({
  imports: [
    TimeRoutingModule,
    ChartsModule
  ],
  declarations: [ TimeComponent ]
})
export class TimeModule { }
