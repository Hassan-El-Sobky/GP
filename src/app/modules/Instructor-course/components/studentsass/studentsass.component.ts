import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-studentsass',
  templateUrl: './studentsass.component.html',
  styleUrls: ['./studentsass.component.scss']
})
export class StudentsassComponent implements OnInit {
id:any
uId:any
displayedColumns: string[] = ['username','action','view-detials'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  addCourseForm: any
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _instS:InstAddCourseService) { }

  ngOnInit(): void {
    this.getCourse()
  }
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.uId=params.get('uid');
      console.log(this.id);  
      console.log(this.uId);  
     this.getStudentAss()
    })
  }

  getStudentAss()
  {
    this._instS.studendAssgiment(this.uId,this.id).subscribe(res=>{
      this.dataSource = new MatTableDataSource<any>(res.solutions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.solutions);
      
    })
  }

}
