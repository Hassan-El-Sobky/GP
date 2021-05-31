import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './component/courses/courses.component';
import { AssignmentsComponent } from './component/assignments/assignments.component';
import { ExamsComponent } from './component/exams/exams.component';
import { MaterialsComponent } from './component/materials/materials.component';
import { QuizzesComponent } from './component/quizzes/quizzes.component';
import { CourseInfoComponent } from './component/course-info/course-info.component';




const routes: Routes = [
  { path: 'course', component: CoursesComponent },
  { path: 'assigments/:id', component: AssignmentsComponent },
  { path: 'exams/:id', component: ExamsComponent },
  { path: 'materials/:id', component: MaterialsComponent },
  { path: 'quizzes/:id', component: QuizzesComponent },
  { path: 'course-info/:id', component:CourseInfoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseRoutingModule {
  public static componentDeclration = [CoursesComponent,
    AssignmentsComponent,
    ExamsComponent,
    MaterialsComponent,
    QuizzesComponent,
    CourseInfoComponent
  ]
  }
