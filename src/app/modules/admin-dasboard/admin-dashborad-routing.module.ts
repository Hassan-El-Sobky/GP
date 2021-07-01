import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './components/dashborad/dashborad.component';

const routes: Routes = [
  {path:'dashboard',component:DashboradComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboradRoutingModule { 
    static componentDeclartion=[
     DashboradComponent
  ]

}
