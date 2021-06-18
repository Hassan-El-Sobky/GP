import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesRoutingModule } from './all-courses-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [...AllCoursesRoutingModule.componentDeclration],
  imports: [
    CommonModule,
    AllCoursesRoutingModule,
    NgxPaginationModule
  ]
})
export class AllCoursesModule { }
