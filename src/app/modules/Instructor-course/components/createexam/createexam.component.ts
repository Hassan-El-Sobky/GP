import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private fb: FormBuilder,private _test:TestService,private _activated:ActivatedRoute,private _inSer:InstAddCourseService,
    private router:Router
    ) {
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

  onSubmit(form:any,title:any,open:any,due:any){
 const questions=form.value.sections[0].questions;
let data={
  token:localStorage.getItem('accessToken'),
     openDate:open , 
       dueDate:due , 
     title:title,
       category:"exam" ,
       username:localStorage.getItem('username'),
       courseId:this.courseId,
       questions:questions
}

    this._inSer.createAssments(data).subscribe(res=>{
     console.log(res);
      if(res.message="done")
      {
        console.log(data);
        this.router.navigate(['instructor','courseExams',this.courseId])
      }
    })
   
    
  }

}
