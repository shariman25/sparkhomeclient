import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { SelectionComponent } from './selection.component';
import { SelectionRoutingModule } from './selection-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SelectionRoutingModule,
    NgxDatatableModule,
    CommonModule,
    FormsModule 
  ],
  declarations: [ SelectionComponent ]
})
export class SelectionModule { }
