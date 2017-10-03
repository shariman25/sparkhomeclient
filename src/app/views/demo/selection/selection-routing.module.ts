import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionComponent } from './selection.component';

const routes: Routes = [
  {
    path: '',
    component: SelectionComponent,
    data: {
      title: 'Responsive'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SelectionRoutingModule {}
