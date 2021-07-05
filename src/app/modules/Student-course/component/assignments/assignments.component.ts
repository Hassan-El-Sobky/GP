import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { StudentCoursesService } from '../../services/student-courses.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  displayedColumns: string[] = [ 'cCode', 'prerequisite','courseDepartment','status','upload'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  courseCode: any
  isTrue: any;
  filetype=false;
  show = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _allCourses:AdminCoursesService,private _studentCourseS:StudentCoursesService,private _location: Location) {
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
    this._studentCourseS.specificCourse(this.id).subscribe(res=>{
            this.courseCode=res.course.courseCode
            console.log(this.courseCode);
            
    })

     this._studentCourseS.getassignments(this.id).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.assigments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
       console.log(res.assigments);
       
     })
    })
   }
  

  //  fileName = '';
  //  d= Date.now
  // selectFile(event:any)
  // {
  //   const file:File = event.target.files[0];
  //   if (file) {

  //     this.fileName = file.name;

  //     const formData = new FormData();
 
      

  //     formData.append("additionPoint",`${this.d}`);
  //     formData.append("assigmentCode","aaaaaaaa");
  //     formData.append("token",`${localStorage.getItem('accessToken')}`);
  //     formData.append("username",`${localStorage.getItem('username')}`);
  //     formData.append("assigmentSolutionFile", file);
  //    this._studentCourseS.uploadAss(formData).subscribe(res=>{
  //         console.log(res);
          
  //       })

  // } }
fileName:any 
  selectFile(event:any,code:any)
  {
    const file:File = event.target.files[0];
    if (file) {

      this.fileName = file.name;
      const formData = new FormData();
      
      console.log(code);
      console.log(file);
      
      
       formData.append("username",`${localStorage.getItem('username')}`);
      formData.append("additionPoint",`No additon Point`);
      formData.append("assigmentCode",code);
      formData.append("token",`${localStorage.getItem('accessToken')}`);
      formData.append("courseCode",`${this.courseCode}`);   
      formData.append("assigmentSolutionFile",file);
    
      this._studentCourseS.uploadAss(formData).subscribe(res => {
        if (res.message == 'done')
        {
          this.isTrue = true
          this.show=true
        
        }
        else if (res.message=="unsupported file type")
        {
          this.filetype = true
          this.show=true
        }
        else if (res.message == "you can't upload second solution  , thankYou")
        {
          this.filetype = false
          this.isTrue = false
          this.show=true
        }

        console.log(res);
        
      })

      
        

   }
   
      //  const data={title:"test" , uploadDate:Date.now() , description:"Hiii" 
      //  , courseCode:"L122", lectureCode:"1" , token:localStorage.getItem('accessToken') ,username:localStorage.getItem('username'),
      //   lectureFile:x}
      //   this._instServ.lecUpload(data).subscribe(res=>{
      //     console.log(res);
          
      //   })
     
  }



   
  close()
  {
    this.show=false
  }





}
// function elseIf() {
//   throw new Error('Function not implemented.');
// }

