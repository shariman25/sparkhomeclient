import { NgModule } from '@angular/core';

import { ProductAddComponent } from './product-add.component';
import { ProductListComponent } from './product-list.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule
  ],
  declarations: [
    ProductAddComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
