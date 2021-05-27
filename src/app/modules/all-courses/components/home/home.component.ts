import { Component, OnInit } from '@angular/core';
import { AvailableCoursesService } from '../../Services/available-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCoursesArr :any;
  num: any;
  courseDeafult:string='assets/images/course.jpg';
  student=localStorage.getItem('role');
  constructor(private _allCourses: AvailableCoursesService) { }
  getAllAvailabel()
  {
    this._allCourses.getAllAvailabeCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      this.num=data.numOfAvailableCourses
      console.log(data.allAvailableCourses);
     console.log(data.numOfAvailableCourses);
     this.allCoursesArr=data.allAvailableCourses;
     
   })
  
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


  ngOnInit(): void {
    this.getAllAvailabel()
    this.getAllpending()
    this.getAllAvailabel()
    this.getAll();
  }
  registerd(courseCode:any) 
  {
 
   const data={
    username:localStorage.getItem('username'),
    courseCode:courseCode,
    token:localStorage.getItem('accessToken')
   }
   this._allCourses.studentRegisterCourse(data).subscribe(res=>{
    console.log(res);
    
   })
   
  }
 
}
