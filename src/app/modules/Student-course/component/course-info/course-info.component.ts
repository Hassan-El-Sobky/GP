import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
   id:any
  constructor(private _activated:ActivatedRoute) { 
    this.getIdByparam();
  }

  ngOnInit(): void {
  }


  getIdByparam()
  {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
  })}

}
