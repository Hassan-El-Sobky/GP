import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAdminRoutingModule } from './admin-admin-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [...AdminAdminRoutingModule.componentDeclaration],
  imports: [
    CommonModule,
    AdminAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminAdminModule { }
