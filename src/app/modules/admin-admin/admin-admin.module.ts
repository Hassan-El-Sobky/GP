import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAdminRoutingModule } from './admin-admin-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [...AdminAdminRoutingModule.componentDeclaration],
  imports: [
    CommonModule,
    AdminAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminAdminModule { }
