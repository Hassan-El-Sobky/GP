import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path:'courses',
    component:CoursesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCoursesRoutingModule { 
  static componentsDeclarations = [
   
    CoursesComponent
   
   ];
}
