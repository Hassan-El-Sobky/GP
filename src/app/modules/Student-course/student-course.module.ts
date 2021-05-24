import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [...StudentCourseRoutingModule.componentDeclration,],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    MatTableModule
  ]
})
export class StudentCourseModule { }
