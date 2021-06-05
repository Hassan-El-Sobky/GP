import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InstAddCourseService } from '../../services/inst-add-course.service';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courseDeafult: string = 'assets/images/course.jpg';
  username = localStorage.getItem('username')
  totalLength: any;
  page: number = 1;
  addCourseForm: any
  courses:any
    fileName = '';
  constructor(private _services:InstAddCourseService,private fb:FormBuilder) { 
     this.instructorCourses()
        this.addCourseForm = this.fb.group({
          courseName:  [null,Validators.required,],
          courseCode: [null,Validators.required,],
          courseDepartment: [null,Validators.required],
         prerequisite: [null,Validators.required],
         courseImage:[null,Validators.required]
        //  courseImage:[null,Validators.required]
        },
       
        )
       
  }
  

  instructorCourses()
  {
    this._services.instructorCourses(this.username).subscribe(res=>{
      console.log(res.instructorCourses);
      this.courses=res.instructorCourses
      this.totalLength=res.instructorCourses.length;
    })
  }
  filex:any
  d= Date.now
  selectFile(event:any)
  {
     const file:File = event.target.files[0];
     this.filex=file

  }

  getCourseData() {
     
      let formData=new FormData();
      formData.append('courseName',`${this.addCourseForm.get('courseName').value}`);
      formData.append('courseCode',`${this.addCourseForm.get('courseCode').value}`);
      formData.append('courseDepartment',`${this.addCourseForm.get('courseDepartment').value}`);
      formData.append('prerequisite',`${this.addCourseForm.get('prerequisite').value}`);
      formData.append('token',`${localStorage.getItem('accessToken')}`);
      formData.append('username',`${localStorage.getItem('username')}`);
      formData.append('courseImage',this.filex);
      
console.log(this.filex);

   
        this._services.addCourse(formData).subscribe((data) => {
          console.log(data);
              this.instructorCourses();
        })

    this._services.addCourse(formData).subscribe((data) => {
      console.log(data);

    })

  };

  form() {
    this.addCourseForm = this.fb.group({
      courseName: [null, Validators.required,],
      courseCode: [null, Validators.required,],
      courseDepartment: [null, Validators.required],
      prerequisite: [null, Validators.required],
      courseImage: [null, Validators.required]
    },
    )

    return this.addCourseForm;

  }





  ngOnInit(): void {
  }
  showId(x: any) {
    console.log(x);

  }
}
