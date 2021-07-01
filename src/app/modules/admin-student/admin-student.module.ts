import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStudentRoutingModule } from './admin-student-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DeletedialogComponent } from './components/deletedialog/deletedialog.component';

@NgModule({
  declarations: [...AdminStudentRoutingModule.componentDecleartion, DeletedialogComponent],
  imports: [
    CommonModule,
    AdminStudentRoutingModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminStudentModule { }
