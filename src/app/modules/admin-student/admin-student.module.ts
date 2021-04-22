import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStudentRoutingModule } from './admin-student-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [...AdminStudentRoutingModule.componentDecleartion],
  imports: [
    CommonModule,
    AdminStudentRoutingModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminStudentModule { }
