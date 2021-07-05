import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../services/student-courses.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-mygrade',
  templateUrl: './mygrade.component.html',
  styleUrls: ['./mygrade.component.scss']
})
export class MygradeComponent implements OnInit {
  displayedColumns: string[] = [ 'name','title','grade'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _studentCourseS:StudentCoursesService,private _activated:ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {

this.getMygrades();
  }
  backClicked() {
    this._location.back();
  }
 

  id:any
  getMygrades()
   {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
  

     this._studentCourseS.mygrade(this.id,localStorage.getItem('username')).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.container);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
       console.log(res.assigments);
    console.log(res);
    
       
     })
    })
   }

  

}
