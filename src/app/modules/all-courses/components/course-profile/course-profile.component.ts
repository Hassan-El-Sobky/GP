import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AvailableCoursesService } from '../../Services/available-courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-profile',
  templateUrl: './course-profile.component.html',
  styleUrls: ['./course-profile.component.scss']
})
export class CourseProfileComponent implements OnInit {
  id: any
  course: any;
  courseDeafult:string='assets/images/course.jpg';
  constructor(private _location: Location, private _courseData: AvailableCoursesService, private _activated: ActivatedRoute) {
    this.getCourseData()
   }
  

  getCourseData()
  {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this._courseData.specificCourse(this.id).subscribe((data) => {
        this.course = data.course;
        console.log(data);
        
        
      })
      
    })
   
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
