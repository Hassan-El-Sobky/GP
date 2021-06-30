import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
 courseId:any
 courseExams:any
  constructor(private _location: Location ,private _activated:ActivatedRoute,private _instS:InstAddCourseService) 
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
      this.courseExams=res.courseExams;
   })
  }
}
