import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    data: {
      title: 'Table'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
