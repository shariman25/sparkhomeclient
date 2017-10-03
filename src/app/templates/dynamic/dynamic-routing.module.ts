import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicTemplateComponent } from './dynamic-template.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicTemplateComponent,
    data: {
      title: 'Dynamic'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule {}
