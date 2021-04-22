import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminStudentsService } from '../../services/admin-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'username', 'email','Gender'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _adminStu:AdminStudentsService) { }

  ngOnInit(): void {
    this.getAllStu();
  }



  getAllStu()
  {
    this._adminStu.getStudent().subscribe(res=>{
      this.dataSource = new MatTableDataSource<any>(res.allStudents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
