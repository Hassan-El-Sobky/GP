import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestRoutingModule } from './test-routing.module';


import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [...TestRoutingModule.componentsDeclarations],
  imports: [
    CommonModule,
    TestRoutingModule,

  ],

})
export class TestModule { }
