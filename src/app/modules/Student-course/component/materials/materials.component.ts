import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cCode', 'prerequisite','courseDepartment','status','state','action', 'view-detials'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _allCourses:AdminCoursesService,private _location: Location) {
    this.getAllCourses()
   }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
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
}
