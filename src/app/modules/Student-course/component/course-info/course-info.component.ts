import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
   id:any
  constructor(private _activated:ActivatedRoute,private _location: Location) { 
    this.getIdByparam();
  }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  getIdByparam()
  {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
  })}

}
