import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { HeaderComponent } from './core/layouts/header/header.component';
import { SideNavComponent } from './core/layouts/side-nav/side-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { InstructorsComponent } from './modules/admin-instructor/components/instructors/instructors.component';
import { AuthGuard } from './modules/authentication/gurads/auth.guard';
import { StudentsComponent } from './modules/admin-student/components/students/students.component';
import { DeletedialogComponent } from './modules/admin-courses/components/deletedialog/deletedialog.component';
import { AdminGuradGuard } from './modules/authentication/gurads/admin-gurad.guard';






@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,  
  ],
  entryComponents: [
    DeletedialogComponent
  ],
  providers: [
    AuthGuard,
    AdminGuradGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
