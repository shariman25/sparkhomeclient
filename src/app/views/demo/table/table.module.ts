import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    TableRoutingModule,
    NgxDatatableModule,
    CommonModule,
    FormsModule 
  ],
  declarations: [ TableComponent ]
})
export class TableModule { }
