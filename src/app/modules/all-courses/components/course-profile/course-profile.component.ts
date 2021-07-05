import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AvailableCoursesService } from '../../Services/available-courses.service';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../../../../core/services/token.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-profile',
  templateUrl: './course-profile.component.html',
  styleUrls: ['./course-profile.component.scss']
})
export class CourseProfileComponent implements OnInit {
  id: any
  course: any;
  username:any
  insName: any
  coursecode: any
  isTrue: any;
  show = false;

  role=localStorage.getItem("role");
  courseDeafult:string='assets/images/course.jpg';
  constructor(private _location: Location, private _courseData: AvailableCoursesService, private _activated: ActivatedRoute,public tokenService: TokenService, private _router:Router) {
    this.getCourseData()


    

   }
  
 

  getCourseData() {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
     
   
        this._courseData.specificCourse(this.id).subscribe((data) => {
          console.log(data.course);
          this.coursecode=data.course.courseCode
        
          this.course = data.course;
          let insId = data.course.instructorId

          this._courseData.userProfile(insId).subscribe(res => {
            this.insName = res.user.name
         
            
          })
        
        })
      
      })
   
    }
  
    registerd(courseCode:any) 
    {
   
     const data={
      username:localStorage.getItem('username'),
      courseCode:courseCode,
      token:localStorage.getItem('accessToken')
     }
      this._courseData.studentRegisterCourse(data).subscribe(res => {

        if (res.message == "done")
        {
          this.show=true
          this.isTrue = true
         
        }
        else
        {
          this.isTrue = false

          
        }

       
       
      console.log(res);
      
     })
     
  }
  
  close()
  {
    
    this.show = false;
    this._router.navigate(['/student/course']);
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
