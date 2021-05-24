import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesRoutingModule } from './all-courses-routing.module';


@NgModule({
  declarations: [...AllCoursesRoutingModule.componentDeclration],
  imports: [
    CommonModule,
    AllCoursesRoutingModule
  ]
})
export class AllCoursesModule { }
