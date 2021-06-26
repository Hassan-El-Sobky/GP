import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
 courseId:any
  constructor(private _location: Location ,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.getId();
  }
  backClicked() {
    this._location.back();
  }

  getId(){
    this._activated.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
      
    });
  }

}
