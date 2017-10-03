import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ResponsiveComponent } from './responsive.component';
import { ResponsiveRoutingModule } from './responsive-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ResponsiveRoutingModule,
    NgxDatatableModule,
    FormsModule 
  ],
  declarations: [ ResponsiveComponent ]
})
export class ResponsiveModule { }
