import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorCourseRoutingModule } from './instructor-course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { MaterialsComponent } from './components/materials/materials.component';
import {MatTableModule} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [... InstructorCourseRoutingModule.componentsDeclarations, MyCoursesComponent, CoursedetailsComponent, MaterialsComponent ],
  imports: [
    CommonModule,
    InstructorCourseRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    NgxPaginationModule
  ]
})
export class InstructorCourseModule {
 
 }

