import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstAddCourseService } from '../../services/inst-add-course.service';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courseDeafult:string='assets/images/course.jpg';
  username=localStorage.getItem('username')
  totalLength:any;
  page:number=1;
  addCourseForm: any
  courses:any
  constructor(private _services:InstAddCourseService) { 
        this._services.instructorCourses(this.username).subscribe(res=>{
          console.log(res.instructorCourses);
          this.courses=res.instructorCourses
          this.totalLength=res.instructorCourses.length;
        })
    this.form();
       
  }

  getCourseData(addCourseForm: any) {
    if (addCourseForm.valid == true) {
      console.log(addCourseForm.value);

      this._services.addCourse(addCourseForm.value).subscribe((data) => {
        console.log(data);

      });
    }
  }

  form() {
    this.addCourseForm = new FormGroup({
      "courseName": new FormControl(null, [Validators.required,]),
      "courseCode": new FormControl(null, [Validators.required,]),
      "courseDepartment": new FormControl(null, [Validators.required,]),
     "prerequisite": new FormControl(null, [Validators.required,]),
      "token": new FormControl(localStorage.getItem('accessToken')),
     " username": new FormControl(localStorage.getItem('username'))
    },
   
    )
    console.log(this.addCourseForm.get('courseName').touched);
    
    return this.addCourseForm;
    
  }

  ngOnInit(): void {
  }
  showId(x:any)
  {
   console.log(x);
   
  }
}
