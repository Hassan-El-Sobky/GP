import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../services/student-courses.service';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = [ 'cCode', 'prerequisite','courseDepartment','status'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _studentS:StudentCoursesService,private _location: Location) {
    this.getAllCourses()
   }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
 

  
id:any
  getAllCourses()
   {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  

     this._studentS.getLectures(this.id).subscribe(res=>{
         this.dataSource = new MatTableDataSource<any>(res.lectures);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
       
         console.log(res.lectures);
         
     })
    })
   }
}
