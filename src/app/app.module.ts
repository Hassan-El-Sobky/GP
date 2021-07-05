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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './modules/authentication/gurads/auth.guard';
import { DeletedialogComponent } from './modules/admin-courses/components/deletedialog/deletedialog.component';
import { AdminGuradGuard } from './modules/authentication/gurads/admin-gurad.guard';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderInterInterceptor } from './loader/loader-inter.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgendaService, DayService, MonthAgendaService, MonthService, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { DeletelecturedialogComponent } from './modules/Instructor-course/components/deletelecturedialog/deletelecturedialog.component';
import { InstructorGuard } from './modules/authentication/gurads/instructor.guard';
import { WebcamModule } from 'ngx-webcam';
import { DeletedialogexamComponent } from './modules/Instructor-course/components/deletedialogexam/deletedialogexam.component';

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
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    NgxPaginationModule,
    ScheduleModule,
  
  ],
  entryComponents: [
    DeletedialogComponent,
    DeletelecturedialogComponent,
    DeletedialogexamComponent
  ],
  providers: [
    AuthGuard,
    AdminGuradGuard,
    InstructorGuard,
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterInterceptor,multi:true},
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
