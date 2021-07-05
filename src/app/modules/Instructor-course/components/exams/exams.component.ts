import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import { DeletedialogexamComponent } from '../deletedialogexam/deletedialogexam.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
 courseId:any
 courseExams:any
  constructor(private _location: Location ,private _activated:ActivatedRoute,private _instS:InstAddCourseService, public dialog: MatDialog) 
  {
    
   }

  ngOnInit(): void {
    this.getId();
  }
  backClicked() {
    this._location.back();
  }

  getId(){
    this._activated.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
       this.getExams()
    });
  }

  getExams() {
   this._instS.getExamsById(this.courseId).subscribe(res=>{
     console.log(res.courseExams);
      this.courseExams=res.exams;
      console.log(res);
      
   })
  }


  openDialog(id: any) {
    const dialogRef = this.dialog.open(DeletedialogexamComponent, {
      data: { i: id },
      height: '180px',
      width: '250px',   
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
      setTimeout(() => {
        this._instS.getExamsById(this.courseId).subscribe(res=>{
          console.log(res.courseExams);
           this.courseExams=res.exams;
           console.log(res);
           
        })
      },500)
    });
  
  }
}
