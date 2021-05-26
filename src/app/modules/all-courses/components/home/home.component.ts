import { Component, OnInit } from '@angular/core';
import { AvailableCoursesService } from '../../Services/available-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCoursesArr = [];
  num: any;
  constructor(private _allCourses: AvailableCoursesService) { }
  getAllAvailabel()
  {
    this._allCourses.getAllAvailabeCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      this.num=data.numOfAvailableCourses
      console.log(data.allAvailableCourses);
     console.log(data.numOfAvailableCourses);
     
   })
  }

  getAll()
  {
    this._allCourses.getAllCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      console.log(data);
    //   this.num=data.numOfAvailableCourses
    //   console.log(data.allAvailableCourses);
    //  console.log(data.numOfAvailableCourses);
     
   })
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
  }
  
 
}
