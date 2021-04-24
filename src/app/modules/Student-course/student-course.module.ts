import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import { StudentComponent } from './component/student/student.component';


@NgModule({
  declarations: [...StudentCourseRoutingModule.componentDeclration, StudentComponent],
  imports: [
    CommonModule,
    StudentCourseRoutingModule
  ]
})
export class StudentCourseModule { }
