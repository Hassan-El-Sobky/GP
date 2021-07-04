import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { ViewerProfileComponent } from './component/viewer-profile/viewer-profile.component';

const routes: Routes = [
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'profile/:username', component: ViewerProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {
  public static componentDeclration = [ViewerProfileComponent, MyProfileComponent]
}
