import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/modules/test/services/test.service';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.scss']
})
export class CreateexamComponent implements OnInit {

  exam: any;
  courseId:any
  constructor(private fb: FormBuilder,private _test:TestService,private _activated:ActivatedRoute,private _inSer:InstAddCourseService) {
       this.getId();
  }

  getId(){
    this._activated.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
      
    });
  }

  ngOnInit() {


    this.exam = this.fb.group({
      sections: this.fb.array([
        this.initSection(),
      ]),
    });
  }

  initSection() {
    return this.fb.group({
      questions: this.fb.array([
        this.initQuestion()
        ])
    });
  }
  initQuestion() {
    return this.fb.group({
      question: ['',Validators.required],
      answer: new FormArray([
        this.initOptions()
      ])
    });
  }

  initOptions() {
    return this.fb.group({
      option:[''],
      correct:['']
    });
  }

  addSection() {
    const control = <FormArray>this.exam.get('sections');
    control.push(this.initSection());
  }

  addQuestion(j:any) {
    console.log(j);
    const control = <FormArray>this.exam.get('sections').controls[j].get('questions');
   // console.log(control);
    control.push(this.initQuestion());
    
  }

  add(i:any,j:any) {
    //console.log(k);
    const control = <FormArray>this.exam.get('sections').controls[i].get('questions').controls[j].get('answer');

  // const control = <FormArray>this.survey.get(['sections',0,'questions',k,'options']); // also try this new syntax
    //console.log(control);
    control.push(this.initOptions());
  }

  getSections(form:any) {
    //console.log(form.get('sections').controls);
    return form.controls.sections.controls;
  }
  getQuestions(form:any) {
   //console.log(form.controls.questions.controls);
    return form.controls.questions.controls;
  }
  getOptions(form:any) {
    //console.log(form.get('options').controls);
    return form.controls.answer.controls;

  }

  removeQuestion(j:any){
     const control = <FormArray>this.exam.get('sections').controls[j].get('questions');
     control.removeAt(j);
  }

  removeSection(i:any){
   const control = <FormArray>this.exam.get('sections');
   control.removeAt(i);

  }

  removeOption(i:any,j:any){
   const control = <FormArray>this.exam.get(['sections',i,'questions',j,'answer']); // also try this new syntax
  control.removeAt(i);
  console.log(i);
  
  }

  onSubmit(form:any){
 const questions=form.value.sections[0].questions;
let data={
  token:localStorage.getItem('accessToken'),
     openDate:"fsadfsad" , 
       dueDate:"fadsfasd" , 
     title:"4333aathExam",
       category:"exam" ,
       fullMark:"652" ,
       username:localStorage.getItem('username'),
       courseId:this.courseId,
       questions:questions
}
// { "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiaW5zdHJ1Y3RvciIsInVzZXJuYW1lIjoiam9lIiwiaWF0IjoxNjI0NTY1OTcxfQ.lIJKq6dAphR6KTagMyU3s5tPa7CUVldTN6_qNfkVPqk",
//    "openDate":"fsadfsad" , 
//     "dueDate":"fadsfasd" , 
//     "title":"4thExam",
//     "category":"exam" ,
//     "fullMark":"652" ,
//     "username":"joe",
//     "courseId":"60ba0a3c89d3b40015b94ae8",
//     "questions":[{"question":"fdasfasdf","answer":[{"option":"mmm","correct":true},
//     {"option":"momodfs","correct":false},
//     {"option":"ewrqw","correct":false},
//     {"option":"ewrqwerqwqwer","correct":false}]},{"question":"fdasfasdf","answer":[{"option":"mmm","correct":true},
//     {"option":"momodfs","correct":false},
//     {"option":"ewrqw","correct":false},
//     {"option":"ewrqwerqwqwer","correct":false},{"option":"dgfhgjhgdjtyrwtedsgfdgfdhfyutdf","correct":false}]}]
//     }
    this._inSer.createAssments(data).subscribe(res=>{
     console.log(res);
      
    })
    console.log(data);
    
  }

}