import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from '../../services/admin-courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cCode', 'prerequisite','courseDepartment','status','state','action', 'view-detials'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _allCourses:AdminCoursesService) {
    // this.dataSource = new MatTableDataSource<any>();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getAllCourses()


    
   }

   getAllCourses()
   {
     this._allCourses.getAllCourses().subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.allCourses);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
       console.log(res.allCourses);
       
     })
   }
   courseAccepted(id:any) 
   { 
     
     console.log(id);
     let token=localStorage.getItem('accessToken');
     console.log(token);
     let data=
     { 
       token:token,
       state:"avaiable"
     }
     this._allCourses.udpatedState(id,data).subscribe(res=>{
       console.log(res);
       
     })
     
   }
  ngOnInit(): void {
  }

}