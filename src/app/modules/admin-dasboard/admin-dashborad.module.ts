import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboradRoutingModule } from './admin-dashborad-routing.module';
import {AccordionModule} from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [...AdminDashboradRoutingModule.componentDeclartion],
  imports: [
    CommonModule,
    AdminDashboradRoutingModule,
    ChartModule, AccordionModule
    
  ]
})
export class AdminDashboradModule { }
