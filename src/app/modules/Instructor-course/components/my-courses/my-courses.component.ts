import { Component, OnInit } from '@angular/core';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courseDeafult:string='assets/images/course.jpg';
  username=localStorage.getItem('username')
  
  courses:any
  constructor(private _services:InstAddCourseService) { 
        this._services.instructorCourses(this.username).subscribe(res=>{
          console.log(res.instructorCourses);
          this.courses=res.instructorCourses
        })
       
  }

  ngOnInit(): void {
  }
  showId(x:any)
  {
   console.log(x);
   
  }
}
