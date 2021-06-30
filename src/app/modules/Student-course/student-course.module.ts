import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { WebcamModule } from 'ngx-webcam';
import { ExamquestionsComponent } from './component/examquestions/examquestions.component';





@NgModule({
  declarations: [...StudentCourseRoutingModule.componentDeclration, ExamquestionsComponent],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
    WebcamModule
  ]
})
export class StudentCourseModule { }
