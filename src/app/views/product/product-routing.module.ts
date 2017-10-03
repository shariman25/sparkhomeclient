import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAddComponent } from './product-add.component';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Product'
    },
    children: [
      {
        path: 'product/add',
        component: ProductAddComponent,
        data: {
          title: 'Add'
        }
      },
      {
        path: 'product/list',
        component: ProductListComponent,
        data: {
          title: 'List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
