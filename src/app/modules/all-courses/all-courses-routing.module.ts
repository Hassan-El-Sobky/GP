import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseProfileComponent } from './components/course-profile/course-profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import {HomeComponent} from './components/home/home.component'

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path:'Home', component: HomeComponent },
  { path:'courseProfile/:id', component: CourseProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCoursesRoutingModule {
  public static componentDeclration = [HomeComponent,CourseProfileComponent,CoursesComponent]
 }
