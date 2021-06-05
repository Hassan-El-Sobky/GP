import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Location} from '@angular/common';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: any
  animal: any;
  name: any;


  constructor(private _addCourse: InstAddCourseService, public dialog: MatDialog,private _location: Location) {
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
  
 backClicked() {
  this._location.back();
}


  form() {
    this.addCourseForm = new FormGroup({
      courseName: new FormControl(null, [Validators.required,]),
      courseCode: new FormControl(null, [Validators.required,]),
      courseDepartment: new FormControl(null, [Validators.required,]),
      prerequisite: new FormControl(null, [Validators.required,]),
      token: new FormControl(localStorage.getItem('accessToken')),
      username: new FormControl(localStorage.getItem('username'))
    }
    
    )
    return this.addCourseForm;
    
  }
      




  ngOnInit(): void {

 

  }



}
