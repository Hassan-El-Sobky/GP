import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesRoutingModule } from './all-courses-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { CoursesComponent } from './components/courses/courses.component';

import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [...AllCoursesRoutingModule.componentDeclration,],
  imports: [
    CommonModule,
    AllCoursesRoutingModule,
    NgxPaginationModule,
    CarouselModule,

  ]
})
export class AllCoursesModule { }
