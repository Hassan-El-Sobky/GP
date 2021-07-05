import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'desc','url','action'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource: any;
  isTrue: any
  show = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  id:any
   uploadForm:any;
   addCourseForm:any
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService,private fb:FormBuilder,private _location: Location
    , public dialog: MatDialog
    ) {
    this.getCourse();
    this.addCourseForm = this.fb.group({
      title:  [null,Validators.required],
      asscode:[null,Validators.required],
      uploadDate: [null,Validators.required],
      description: [null,Validators.required],
     courseImage:[null,Validators.required]
    //  courseImage:[null,Validators.required]
    },
   
    )
  }
  backClicked() {
    this._location.back();
  }
   filex:any
   selectFile(event:any)
   {
     const file=event.target.files[0];
     this.filex=file
     console.log(file);
     
   }

  ngOnInit(): void {
  }
  close()
{
  this.show = false;
}

courseCode:any
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
      this._instServ.specificCourse(this.id).subscribe(res=>{
        console.log(res.course.courseCode);
        this.courseCode=res.course.courseCode
        this.getAllAss();
      })

      // this.dataSource = new MatTableDataSource<any>(res.lectures);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // console.log(res.lectures);
       
    })
  }

  assUpl(title:any,deadline:any,code:any,desc:any,file:any) 
  {
       console.log(title);
       console.log(deadline);
       console.log(code);
       console.log(desc);
       console.log(file.value);
       
       const formData=new FormData();
        
       formData.append("title",title)
       formData.append("deadLinetitle",deadline)
       formData.append("description",desc)
       formData.append("assigmentCode",code)
       formData.append("courseCode",this.courseCode)
       formData.append("token",`${localStorage.getItem('accessToken')}`)
       formData.append("username",`${localStorage.getItem('username')}`)
       formData.append('assigmentFile',file.value)

       this._instServ.assUpload(formData).subscribe(res=>{
         console.log(res);
         
       })
       
       
  }
 
  
  getCourseData() {
     
    let formData=new FormData();
    formData.append('title',`${this.addCourseForm.get('title').value}`);
    formData.append('assigmentCode',`${this.addCourseForm.get('asscode').value}`);
    formData.append('uploadDate',`${this.addCourseForm.get('uploadDate').value}`);
    formData.append('description',`${this.addCourseForm.get('description').value}`);
    formData.append('courseCode',this.courseCode);
    formData.append('token',`${localStorage.getItem('accessToken')}`);
    formData.append('username',`${localStorage.getItem('username')}`);
    formData.append('assigmentFile',this.filex);
    
console.log(this.filex);

 
    this._instServ.assUpload(formData).subscribe(res => {
        
      if (res.message == 'done')
      {
        this.isTrue = true
        this.show=true
      }
      else
      {
        this.show = true
        this.isTrue=false
       }
     
        console.log(res);
         this.getAllAss();
      })


  
}

getAllAss()
{
  this._instServ.coursesAssignment(this.id).subscribe(res=>{

    this.dataSource = new MatTableDataSource<any>(res.assigments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(res.assigments);
    
  })
}

openDialog(id: any) {
  const dialogRef = this.dialog.open(DeletedialogComponent, {
    data: { i: id ,courseId:this.id},
    height: '180px',
    width: '250px',   
  });

  dialogRef.afterClosed().subscribe(result => {

    this.getAllAss();
  });

}

}
