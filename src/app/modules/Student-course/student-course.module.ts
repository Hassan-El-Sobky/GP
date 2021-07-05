import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
import { WebcamModule } from 'ngx-webcam';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {ReactiveFormsModule  } from '@angular/forms';
import { MygradeComponent } from './component/mygrade/mygrade.component';





@NgModule({
  declarations: [...StudentCourseRoutingModule.componentDeclration, MygradeComponent, ],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    MatTableModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    NgxPaginationModule,
    WebcamModule,
    CarouselModule,
  ]
})
export class StudentCourseModule { }
