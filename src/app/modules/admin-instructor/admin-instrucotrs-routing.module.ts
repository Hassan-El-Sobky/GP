import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';
import { InstructorsComponent } from './components/instructors/instructors.component';

const routes: Routes = [
  {
    path:'instructors',
    component:InstructorsComponent
  },
  {
    path:'addInstructors',
    component:AddInstructorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminInstrucotrsRoutingModule {
  static componentDecleartion=[
    InstructorsComponent,
    AddInstructorComponent
  ]

 }
