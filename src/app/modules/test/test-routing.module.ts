import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';

const routes: Routes = [
  { path:'test',
   component:AdminPannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { 

  static componentsDeclarations = [
   
 AdminPannelComponent

];

}
