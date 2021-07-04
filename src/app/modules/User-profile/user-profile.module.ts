import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ViewerProfileComponent } from './component/viewer-profile/viewer-profile.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import {ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [...UserProfileRoutingModule.componentDeclration,],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CarouselModule
  ]
})
export class UserProfileModule {
}
