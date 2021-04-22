import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../../services/test.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.scss']
})
export class AdminPannelComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'username', 'email','gender'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _testS:TestService) { }

  ngOnInit(): void {

 this.getI()
  }

  getI()
  {
    this._testS.getIns().subscribe(res=>{
     this.dataSource = new MatTableDataSource<any>(res.allStudents);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      console.log(res.allStudents);
      
    })
  }
}
