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

import {MatFormFieldModule} from '@angular/material/form-field';



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
    MatFormFieldModule
  ],
  entryComponents: [
    DeletedialogComponent,
  ],
  providers: [
    AuthGuard,
    AdminGuradGuard,
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
