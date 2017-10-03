import { NgModule } from '@angular/core';

import { DynamicTemplateComponent } from './dynamic-template.component';
import { DynamicRoutingModule } from './dynamic-routing.module';

@NgModule({
  imports: [
    DynamicRoutingModule
  ],
  declarations: [ DynamicTemplateComponent ]
})
export class DynamicModule { }
