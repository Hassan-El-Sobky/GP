import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { StudentCoursesService } from '../../../Student-course/services/student-courses.service'
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';




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
  id:any
  courseCode:any
  lecturesArr:any
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService) {
    this.getCourse();
   }
  

  ngOnInit(): void {
  }
  
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
      this._instServ.specificCourse(this.id).subscribe(res=>{
        console.log(res.course.courseCode);
        this.courseCode=res.course.courseCode
     



      })
     this._instServ.courseLectures(this.id).subscribe(res=>{


       this.dataSource = new MatTableDataSource<any>(res.lectures);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       console.log(res.lectures);
     })
   
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
      
      formData.append("title","test");
      formData.append("uploadDate",`${this.d}`);
      formData.append("description","aaaaaaaa");
      formData.append("courseCode",`${this.courseCode}`);
      formData.append("token",`${localStorage.getItem('accessToken')}`);
      formData.append("username",`${localStorage.getItem('username')}`);
      formData.append("lectureFile", file);
     this._instServ.lecUpload(formData).subscribe(res=>{
          console.log(res);
          
        })

        console.log(formData);
        

  }
          
      //  const data={title:"test" , uploadDate:Date.now() , description:"Hiii" 
      //  , courseCode:"L122", lectureCode:"1" , token:localStorage.getItem('accessToken') ,username:localStorage.getItem('username'),
      //   lectureFile:x}
      //   this._instServ.lecUpload(data).subscribe(res=>{
      //     console.log(res);
          
      //   })
     
  } }


