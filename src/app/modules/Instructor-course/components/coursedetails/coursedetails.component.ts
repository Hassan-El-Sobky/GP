import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {
  booksicon="assets/images/booksicon.jgp"
  id:any
  constructor(private _activated:ActivatedRoute) { 
    this.getId();
  }

  ngOnInit(): void {
  }
  getId(){
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      
    });
  }
 
}
