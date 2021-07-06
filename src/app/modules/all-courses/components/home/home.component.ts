import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

import { AvailableCoursesService } from '../../Services/available-courses.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCoursesArr: any;
  firstfive:any=[]
  totalLength:any;
  page:number=1;
  num: any;
  courseDeafult:string='assets/images/course.jpg';
  student=localStorage.getItem('role');
  constructor(private _allCourses: AvailableCoursesService, private _router: Router, private _location: Location) {
    
    this.getAllAvailabel()
  }
  
  getAllAvailabel()
  {
    this._allCourses.getAllAvailabeCourses().subscribe((data) => {
      // this.allCoursesArr = data.data.allAvailableCourses
      this.num=data.numOfAvailableCourses
      console.log(data.allAvailableCourses);
     console.log(data.numOfAvailableCourses);
     this.allCoursesArr=data.allAvailableCourses;
      this.totalLength = data.allAvailableCourses.length;
      for (let i = 0; i < 5; i++)
      {
        this.firstfive.push(this.allCoursesArr[i])  
      }
      console.log(this.firstfive);
      
     
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

  courseSearch(name:any)
  {
    // this._allCourses.courseSearch(name).subscribe((res) => {
    //   console.log(res.searchResult);
      
    //  this.allCoursesArr = res.searchResult;

    //})
    
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}


  



  ngOnInit(): void {

  }
 
}
