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
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AgendaService, DayService, MonthAgendaService, MonthService, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { DeletedialogComponent } from './components/deletedialog/deletedialog.component';
import { DeletelecturedialogComponent } from './components/deletelecturedialog/deletelecturedialog.component';
import { DeletedialogexamComponent } from './components/deletedialogexam/deletedialogexam.component';

@NgModule({
  declarations: [...InstructorCourseRoutingModule.componentsDeclarations, CreateexamComponent, ScheduleComponent, DeletedialogComponent, DeletelecturedialogComponent, DeletedialogexamComponent],
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
    MatSortModule,
    ScheduleModule
  ],
  providers: [
  
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ],
})
export class InstructorCourseModule {

}

