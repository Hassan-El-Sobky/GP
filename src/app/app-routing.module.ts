import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuradGuard } from './modules/authentication/gurads/admin-gurad.guard';
import { AuthGuard } from './modules/authentication/gurads/auth.guard';
import { InstructorGuard } from './modules/authentication/gurads/instructor.guard';


const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  {
    path: 'test',
    loadChildren: () =>
      import('./modules/test/test.module').then(
        (m) => m.TestModule
      ),

  },
  /*                  Admin Paths Start                */
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin-courses/admin-courses.module').then(
        (m) => m.AdminCoursesModule
      ),
      canActivate: [AuthGuard,AdminGuradGuard]
  },
  {
    path: 'adminIn',
    loadChildren: () =>
      import('./modules/admin-instructor/admin-instrucotrs.module').then(
        (m) => m.AdminInstrucotrsModule
      ),
      canActivate: [AuthGuard,AdminGuradGuard]
  }, 
  {
    path: 'adminSt',
    loadChildren: () =>
      import('./modules/admin-student/admin-student.module').then(
        (m) => m.AdminStudentModule
      ),
      canActivate: [AuthGuard,AdminGuradGuard]
  },
 
  {
    path: 'adminAnaylsis',
    loadChildren: () =>
      import('./modules/admin-dasboard/admin-dashborad.module').then(
        (m) => m.AdminDashboradModule
      ),
      canActivate: [AuthGuard,AdminGuradGuard]
    
  },
  {
    path: 'adminAdmin',
    loadChildren: () =>
      import('./modules/admin-admin/admin-admin.module').then(
        (m) => m.AdminAdminModule
      ),
      canActivate: [AuthGuard,AdminGuradGuard]
  },
  /*               Admin paths end                      */
  {
    path: 'courses',
    loadChildren: () =>
      import('./modules/all-courses/all-courses.module').then(
        (m) => m.AllCoursesModule
      ),
  },
  /*               Student Paths Start                   */
  {
    path: 'student',
    loadChildren: () =>
      import('./modules/Student-course/student-course.module').then(
        (m) => m.StudentCourseModule
      ),
  },
   /*               Instructor Paths Start                   */
   {
    path: 'instructor',
    loadChildren: () =>
      import('./modules/Instructor-course/instructor-course.module').then(
        (m) => m.InstructorCourseModule
      ),
      canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
