import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [...StudentCourseRoutingModule.componentDeclration,],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule
  ]
})
export class StudentCourseModule { }
