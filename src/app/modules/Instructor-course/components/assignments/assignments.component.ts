import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';

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
  id:any

  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService) {
    this.getCourse();
   }
  

  ngOnInit(): void {
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
       formData.append('assigmentFile',file.value)

       this._instServ.assUpload(formData).subscribe(res=>{
         console.log(res);
         
       })
       
       
  }
}
