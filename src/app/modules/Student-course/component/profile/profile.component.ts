import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../services/student-courses.service'
import { Location } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  courses: any;
  name: any
  email: any
  userName: any
  username: any
  status: any
  role: any
  courseDeafult:string='assets/images/course.jpg';

  constructor(private _profile: StudentCoursesService, private _activated: ActivatedRoute, private _location: Location) {
    this.getProfile()
    this.role = localStorage.getItem('role');
    console.log(this.role);
    
  }
  
  
  ngOnInit(): void {
  }

  getProfile() {
    this._activated.paramMap.subscribe(params => {
      this.username = params.get('username')
    })

    this._profile.getProfile(this.username).subscribe((data) => {
      console.log(data);
      if (data.user.role=="instructor")
      {
        this.courses = data.instructorCourses
        if (data.instructorCourses.length==0)
        {
          this.status="This Instructor Has not Uploaded Any Courses Yet"
        }
      }
      else
      {
        
        this.courses = data.studentCourses
        if (data.studentCourses.length==0)
        {
          this.status="This Student Has not Registered Any Courses Yet"
        }
      }
      
      this.name = data.user.name
      this.email = data.user.email
      this.userName = data.user.username

    })

  }

  backClicked() {

    this._location.back();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
