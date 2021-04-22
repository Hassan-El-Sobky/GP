import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
const routes: Routes = [
  {
    path:'students',
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class AdminStudentRoutingModule {
  
  static componentDecleartion=[
    StudentsComponent
  ]

 }
