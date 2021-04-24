import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './component/student/student.component';

const routes: Routes = [
  { path:'student',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseRoutingModule {
  public static componentDeclration = [StudentComponent]
  }
