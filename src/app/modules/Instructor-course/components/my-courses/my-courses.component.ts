import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    fileName = '';
  constructor(private _services:InstAddCourseService,private fb:FormBuilder) { 
        this._services.instructorCourses(this.username).subscribe(res=>{
          console.log(res.instructorCourses);
          this.courses=res.instructorCourses
          this.totalLength=res.instructorCourses.length;
        })
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
  sendFile:any
  d= Date.now
  selectFile(event:any)
  {
    // const file:File = event.target.files[0];
    // this.sendFile=file

    // if (file) {

    //   this.fileName = file.name;
    //   this.addCourseForm.patchValue({
    //    courseImage:file
    //   })
    //   this.addCourseForm.get('courseImage').updateValueAndValidity();

      // let formData=new FormData();
      // formData.append('courseName',`${this.addCourseForm.get('courseName').value}`);
      // formData.append('courseCode',`${this.addCourseForm.get('courseCode').value}`);
      // formData.append('courseDepartment',`${this.addCourseForm.get('courseDepartment').value}`);
      // formData.append('prerequisite',`${this.addCourseForm.get('prerequisite').value}`);
      // formData.append('token',`${localStorage.getItem('accessToken')}`);
      // formData.append('username',`${localStorage.getItem('username')}`);
      // formData.append('courseImage',file)
      // this._services.addCourse(formData).subscribe((data) => {
      //   console.log(data);
            
      // })
  
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.addCourseForm.patchValue({
          courseImage:event.target.files[0]
        });
      } 

  
  }

  getCourseData(addCourseForm: any) {
    
     console.log(addCourseForm.value);
    
      // this._services.addCourse(addCourseForm.value).subscribe((data) => {
      //   console.log(data);

      // });
     
      let formData=new FormData();
      formData.append('courseName',`${this.addCourseForm.get('courseName').value}`);
      formData.append('courseCode',`${this.addCourseForm.get('courseCode').value}`);
      formData.append('courseDepartment',`${this.addCourseForm.get('courseDepartment').value}`);
      formData.append('prerequisite',`${this.addCourseForm.get('prerequisite').value}`);
      formData.append('token',`${localStorage.getItem('accessToken')}`);
      formData.append('username',`${localStorage.getItem('username')}`);
      formData.append('courseImage',`${this.addCourseForm.get('courseImage').value}`);
      
console.log(this.addCourseForm.get('courseImage').value);

      
  //  console.log(this.addCourseForm.get('courseName').value);
  //   console.log(this.addCourseForm.get('courseImage').value);
    // let constData={
    //   courseName:this.addCourseForm.get('courseName').value,
    //   courseCode:this.addCourseForm.get('courseCode').value,
    //   courseDepartment:this.addCourseForm.get('courseDepartment').value,
    //   prerequisite:this.addCourseForm.get('prerequisite').value,
    //   token:`${localStorage.getItem('accessToken')}`,
    //   username:`${localStorage.getItem('username')}`,
    //   courseImage:this.addCourseForm.get('courseImage').value
    
    // }
   console.log(formData);
   
        this._services.addCourse(formData).subscribe((data) => {
          console.log(data);
              
        })


    
  }

  form() {
    this.addCourseForm = this.fb.group({
      courseName:  [null,Validators.required,],
      courseCode: [null,Validators.required,],
      courseDepartment: [null,Validators.required],
     prerequisite: [null,Validators.required],
     courseImage:[null,Validators.required]
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
