import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveComponent } from './responsive.component';

const routes: Routes = [
  {
    path: '',
    component: ResponsiveComponent,
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
export class ResponsiveRoutingModule {}
