import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: any
  

  constructor(private _addCourse: InstAddCourseService) {
    this.form();
  }


  getCourseData(addCourseForm: any) {
    if (addCourseForm.valid == true) {
      console.log(addCourseForm.value);
      
      this._addCourse.addCourse(addCourseForm.value).subscribe((data) => {
        console.log(data);

      });
    }
  }

  form() {
    this.addCourseForm = new FormGroup({
      courseName: new FormControl(null, [Validators.required,]),
      courseCode: new FormControl(null, [Validators.required,]),
      courseDepartment: new FormControl(null, [Validators.required,]),
      prerequisite: new FormControl(null, [Validators.required,]),
      token:new FormControl(localStorage.getItem('accessToken')) ,
      username:new FormControl(localStorage.getItem('userName'))
    })
    return this.addCourseForm;
  }

  ngOnInit(): void {
   
  
    
  }

}
