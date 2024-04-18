import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';



@NgModule({
  declarations: [RegistrationComponent, EditemployeeComponent],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
