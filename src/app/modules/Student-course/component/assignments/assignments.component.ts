import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { StudentCoursesService } from '../../services/student-courses.service';




@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cCode', 'prerequisite','courseDepartment','status','state','action', 'view-detials'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _allCourses:AdminCoursesService,private _studentCourseS:StudentCoursesService) {
    this.getAllCourses()
   }

  ngOnInit(): void {
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

   fileName = '';
   d= Date.now
  selectFile(event:any)
  {
    const file:File = event.target.files[0];
    if (file) {

      this.fileName = file.name;

      const formData = new FormData();
 
      

      formData.append("additionPoint",`${this.d}`);
      formData.append("assigmentCode","aaaaaaaa");
      formData.append("token",`${localStorage.getItem('accessToken')}`);
      formData.append("username",`${localStorage.getItem('username')}`);
      formData.append("assigmentSolutionFile", file);
     this._studentCourseS.uploadAss(formData).subscribe(res=>{
          console.log(res);
          
        })

  } }
}
