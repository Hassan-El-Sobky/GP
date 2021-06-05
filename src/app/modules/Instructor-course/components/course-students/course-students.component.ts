import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.scss']
})
export class CourseStudentsComponent implements OnInit {
  displayedColumns: string[] = ['username','role','action'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  addCourseForm: any
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService,private _location: Location) {
    this.getCourse()
   }

  ngOnInit(): void {
  }
 id:any
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
     this.getStudents();
    })
  }
  backClicked() {
    this._location.back();
  }

 
  getStudents()
  {
    this._instServ.courseStudent(this.id).subscribe(res=>{
      this.dataSource = new MatTableDataSource<any>(res.courseStudents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.courseStudents);
      
    })
  }
  

}
