import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-studentgrade',
  templateUrl: './studentgrade.component.html',
  styleUrls: ['./studentgrade.component.scss']
})
export class StudentgradeComponent implements OnInit {
  displayedColumns: string[] = [ 'name','title','grade'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _instS:InstAddCourseService,private _location: Location) { }

  ngOnInit(): void {
    this.getMygrades()
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
  

     this._instS.studentsGrades(this.id).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.container);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
    console.log(res);
    
       
     })
    })
  }
  searchGrade(username:any)
  {
    this._instS.searchGrade(this.id, username).subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res.searchResult);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     
      console.log(res);


    })
    
  }


}
