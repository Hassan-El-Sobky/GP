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
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService,) { }

  ngOnInit(): void {
  }
  
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
      this._instServ.specificCourse(this.id).subscribe(res=>{
        console.log(res);
        
      })
    })
  }

 
          
      //  const data={title:"test" , uploadDate:Date.now() , description:"Hiii" 
      //  , courseCode:"L122", lectureCode:"1" , token:localStorage.getItem('accessToken') ,username:localStorage.getItem('username'),
      //   lectureFile:x}
      //   this._instServ.lecUpload(data).subscribe(res=>{
      //     console.log(res);
          
      //   })
     
  }


