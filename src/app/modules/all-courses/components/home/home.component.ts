import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

import { AvailableCoursesService } from '../../Services/available-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCoursesArr :any;
  totalLength:any;
  page:number=1;
  num: any;
  courseDeafult:string='assets/images/course.jpg';
  student=localStorage.getItem('role');
  constructor(private _allCourses: AvailableCoursesService , private _router:Router,private _location: Location) { }
  getAllAvailabel()
  {
    this._allCourses.getAllAvailabeCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      this.num=data.numOfAvailableCourses
      console.log(data.allAvailableCourses);
     console.log(data.numOfAvailableCourses);
     this.allCoursesArr=data.allAvailableCourses;
     this.totalLength=data.allAvailableCourses.length;
     
   })
  
  }
  backClicked() {
    this._location.back();
  }

  getAll()
  {
//  this._allCourses.getAllCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      // this.allCoursesArr=data.allCourses;
      // console.log(this.allCoursesArr);
      
    //   this.num=data.numOfAvailableCourses
    //   console.log(data.allAvailableCourses);
    //  console.log(data.numOfAvailableCourses);
     
  // })
  }

  getAllpending()
  {
    this._allCourses.getAllpending().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      this.num=data.numOfAvailableCourses
      console.log(data);
    //  console.log(data.numOfAvailableCourses);
     
   })
  }


  
  registerd(courseCode:any) 
  {
 
   const data={
    username:localStorage.getItem('username'),
    courseCode:courseCode,
    token:localStorage.getItem('accessToken')
   }
    this._allCourses.studentRegisterCourse(data).subscribe(res => {
      this._router.navigate(['/student/course']);
     
    console.log(res);
    
   })
   
  }

  courseSearch(name:any)
  {
    // this._allCourses.courseSearch(name).subscribe((res) => {
    //   console.log(res.searchResult);
      
    //   this.allCoursesArr = res.searchResult;

    // })
    
  }

  ngOnInit(): void {
    this.getAllAvailabel()
    this.getAllpending()
    this.getAllAvailabel()
    this.getAll();
  }
 
}
