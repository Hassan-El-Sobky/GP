import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorCourseRoutingModule } from './instructor-course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExamQuestionsComponent } from './components/exam-questions/exam-questions.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { CreateexamComponent } from './components/createexam/createexam.component';

@NgModule({
  declarations: [...InstructorCourseRoutingModule.componentsDeclarations, CreateexamComponent],
  imports: [
    CommonModule,
    InstructorCourseRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class InstructorCourseModule {

}

