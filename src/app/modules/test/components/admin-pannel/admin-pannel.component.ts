import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../../services/test.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Table } from 'primeng/table';
import { ConfirmationService, ConfirmEventType, PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.scss'],
 
})
export class AdminPannelComponent implements OnInit {
  userName=localStorage.getItem('username')
constructor(){
}
ngOnInit(){

}
}

