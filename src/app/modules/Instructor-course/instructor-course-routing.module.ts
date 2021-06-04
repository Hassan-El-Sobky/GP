import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
const routes: Routes = [
  {path:'addCourse',component:AddCourseComponent},
  {path:'myCourse',component:MyCoursesComponent},
  {path:'courseDetails/:id',component:CoursedetailsComponent},
  {path:'courseMaterials/:id',component:MaterialsComponent},
  {path:'courseAssignments/:id',component:AssignmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class InstructorCourseRoutingModule {
  static componentsDeclarations = [AddCourseComponent]
 }
