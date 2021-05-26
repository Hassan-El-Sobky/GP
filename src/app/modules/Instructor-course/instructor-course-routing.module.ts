import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {path:'addCourse',component:AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorCourseRoutingModule {
  static componentsDeclarations = [AddCourseComponent]
 }
