import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin-courses/admin-courses.module').then(
        (m) => m.AdminCoursesModule
      ),
    
  },
  {
    path: 'adminIn',
    loadChildren: () =>
      import('./modules/admin-instructor/admin-instrucotrs.module').then(
        (m) => m.AdminInstrucotrsModule
      ),
    
  }, 
  {
    path: 'adminSt',
    loadChildren: () =>
      import('./modules/admin-student/admin-student.module').then(
        (m) => m.AdminStudentModule
      ),
    
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
