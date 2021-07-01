import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AvailableCoursesService } from '../../Services/available-courses.service';
import { ActivatedRoute } from '@angular/router';
import { TokenService} from '../../../../core/services/token.service'

@Component({
  selector: 'app-course-profile',
  templateUrl: './course-profile.component.html',
  styleUrls: ['./course-profile.component.scss']
})
export class CourseProfileComponent implements OnInit {
  id: any
  course: any;
  username:any
  insName:any
  courseDeafult:string='assets/images/course.jpg';
  constructor(private _location: Location, private _courseData: AvailableCoursesService, private _activated: ActivatedRoute,public tokenService: TokenService) {
    this.getCourseData()


    

   }
  

  getCourseData() {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
     
   
        this._courseData.specificCourse(this.id).subscribe((data) => {
          console.log(data.course);
        
          this.course = data.course;
          let insId = data.course.instructorId

          // // this._courseData.userProfile(insId).subscribe(res => {
          // //   this.insName = res.user.name
         
            
          // })
        
        })
      
      })
   
    }
  

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
