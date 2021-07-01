import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAdminRoutingModule } from './admin-admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [...AdminAdminRoutingModule.componentDeclaration],
  imports: [
    CommonModule,
    AdminAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AdminAdminModule { }
