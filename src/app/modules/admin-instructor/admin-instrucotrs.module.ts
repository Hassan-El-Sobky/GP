import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInstrucotrsRoutingModule } from './admin-instrucotrs-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [...AdminInstrucotrsRoutingModule.componentDecleartion, AddInstructorComponent],
  imports: [
    CommonModule,
    AdminInstrucotrsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminInstrucotrsModule { }
