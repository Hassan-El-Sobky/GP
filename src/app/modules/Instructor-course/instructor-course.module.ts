import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorCourseRoutingModule } from './instructor-course-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [... InstructorCourseRoutingModule.componentsDeclarations ],
  imports: [
    CommonModule,
    InstructorCourseRoutingModule,
    ReactiveFormsModule
  ]
})
export class InstructorCourseModule {
 
 }

