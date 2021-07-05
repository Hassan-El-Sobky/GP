import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentallgradesComponent } from './components/studentallgrades/studentallgrades.component';
import { StudentsComponent } from './components/students/students.component';
const routes: Routes = [
  {
    path:'students',
    component:StudentsComponent
  },
  {
    path:'studentallgrades/:id',
    component:StudentallgradesComponent
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
