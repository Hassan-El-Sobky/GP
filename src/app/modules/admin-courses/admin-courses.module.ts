import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { AdminCoursesRoutingModule } from './admin-courses-routing.module';
import { DeletedialogComponent } from './components/deletedialog/deletedialog.component';


@NgModule({
  declarations: [... AdminCoursesRoutingModule.componentsDeclarations, DeletedialogComponent],
  imports: [
    CommonModule,
    AdminCoursesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminCoursesModule { }
