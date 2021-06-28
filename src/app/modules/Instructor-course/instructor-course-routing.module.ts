import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { ExamsComponent } from './components/exams/exams.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { ExamQuestionsComponent } from './components/exam-questions/exam-questions.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { CreateexamComponent } from './components/createexam/createexam.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
const routes: Routes = [
  {path:'addCourse',component:AddCourseComponent},
  {path:'myCourse',component:MyCoursesComponent},
  {path:'courseDetails/:id',component:CoursedetailsComponent},
  {path:'courseMaterials/:id',component:MaterialsComponent},
  {path:'courseAssignments/:id',component:AssignmentsComponent},
  { path: 'courseStudents/:id', component: CourseStudentsComponent },
  { path: 'courseQuizzes/:id', component: QuizzesComponent },
  { path: 'courseExams/:id', component: ExamsComponent },
  { path: 'examQuestions', component: ExamQuestionsComponent },
  {path:'quizQuestions',component:QuizQuestionsComponent},
  {path:'createexam/:id',component:CreateexamComponent},
  {path:'schedule',component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class InstructorCourseRoutingModule {
  static componentsDeclarations = [AddCourseComponent,
    MyCoursesComponent,
    CoursedetailsComponent,
    MaterialsComponent,
    AssignmentsComponent,
    CourseStudentsComponent,
    QuizzesComponent,
    ExamsComponent,
    ExamQuestionsComponent,
    QuizQuestionsComponent]
 }
