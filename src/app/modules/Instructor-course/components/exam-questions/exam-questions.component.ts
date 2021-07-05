import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InstAddCourseService } from '../../services/inst-add-course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-exam-questions',
  templateUrl: './exam-questions.component.html',
  styleUrls: ['./exam-questions.component.scss']
})
export class ExamQuestionsComponent implements OnInit {
id:any
questions:any
  constructor(private _location: Location ,private instS:InstAddCourseService,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.getExam();
    
  }
  backClicked() {
    this._location.back();
  }

   
  getExam()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
   this.instS.getSpecificExam(this.id).subscribe(res=>{
     console.log(res.assesment.questions);
     this.questions=res.assesment.questions
   })
   
    })
  }
}
