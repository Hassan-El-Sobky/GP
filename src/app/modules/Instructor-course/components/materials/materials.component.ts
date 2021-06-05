import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { StudentCoursesService } from '../../../Student-course/services/student-courses.service'
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = ['cCode', 'prerequisite','status','courseDepartment','action'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  addCourseForm: any
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  id:any
  courseCode:any
  lecturesArr:any
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService,private fb:FormBuilder) {
    this.getCourse();

    this.addCourseForm = this.fb.group({
      title:  [null,Validators.required,],
      uploadDate: [null,Validators.required],
      description: [null,Validators.required],
     courseImage:[null,Validators.required]
    //  courseImage:[null,Validators.required]
    },
   
    )
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
     
           this.cousresLectures();


      })
 
   
    })
  }

  cousresLectures()
  {
    this._instServ.courseLectures(this.id).subscribe(res=>{


      this.dataSource = new MatTableDataSource<any>(res.lectures);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.lectures);
    })
  }
  fileName = '';
  filex:any
  d= Date.now
  selectFile(event:any)
  {
    const file:File = event.target.files[0];
    if (file) {

      this.fileName = file.name;
      this.filex=file
      const formData = new FormData();
      
    //   formData.append("title","test");
    //   formData.append("uploadDate",`${this.d}`);
    //   formData.append("description","aaaaaaaa");
    //   formData.append("courseCode",`${this.courseCode}`);
    //   formData.append("token",`${localStorage.getItem('accessToken')}`);
    //   formData.append("username",`${localStorage.getItem('username')}`);
    //   formData.append("lectureFile", file);
    //  this._instServ.lecUpload(formData).subscribe(res=>{
    //       console.log(res);
          
    //     })

      
        

   }
          
      //  const data={title:"test" , uploadDate:Date.now() , description:"Hiii" 
      //  , courseCode:"L122", lectureCode:"1" , token:localStorage.getItem('accessToken') ,username:localStorage.getItem('username'),
      //   lectureFile:x}
      //   this._instServ.lecUpload(data).subscribe(res=>{
      //     console.log(res);
          
      //   })
     
  }

  getCourseData() {
     
    let formData=new FormData();
    formData.append('title',`${this.addCourseForm.get('title').value}`);
    formData.append('uploadDate',`${this.addCourseForm.get('uploadDate').value}`);
    formData.append('description',`${this.addCourseForm.get('description').value}`);
    formData.append('courseCode',this.courseCode);
    formData.append('token',`${localStorage.getItem('accessToken')}`);
    formData.append('username',`${localStorage.getItem('username')}`);
    formData.append('lectureFile',this.filex);
    
console.log(this.filex);

 this._instServ.lecUpload(formData).subscribe(res=>{
   console.log(res);
   this.cousresLectures();
   
 })
      


  
}


         
  form() {
    this.addCourseForm = this.fb.group({
      courseName:  [null,Validators.required,],
      courseCode: [null,Validators.required,],
      courseDepartment: [null,Validators.required],
     prerequisite: [null,Validators.required],
     courseImage:[null,Validators.required]
    },
   
    )
    console.log(this.addCourseForm.get('courseName').touched);
    
    return this.addCourseForm;
    
  }

}


