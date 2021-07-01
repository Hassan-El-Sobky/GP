import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component'



const routes: Routes = [
  {
    path: 'addAdmin',
    component: AddAdminComponent
  },
  {
    path: 'adminProfile',
    component: AdminProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAdminRoutingModule {
  static componentDeclaration = [
    AddAdminComponent,
    AdminProfileComponent
  ];
}
