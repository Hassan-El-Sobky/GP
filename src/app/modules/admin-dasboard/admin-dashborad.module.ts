import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboradRoutingModule } from './admin-dashborad-routing.module';



@NgModule({
  declarations: [...AdminDashboradRoutingModule.componentDeclartion],
  imports: [
    CommonModule,
    AdminDashboradRoutingModule
  ]
})
export class AdminDashboradModule { }
