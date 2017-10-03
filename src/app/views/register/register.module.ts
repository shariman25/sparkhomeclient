import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    RegisterRoutingModule,
    FormsModule 
  ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule { }
