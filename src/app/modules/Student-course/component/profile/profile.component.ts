import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../../services/student-courses.service'
import {Location} from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  courses: any;
  name: any
  email: any
  userName:any
  username:any
  
  constructor(private _profile: StudentCoursesService ,private _activated: ActivatedRoute,private _location: Location) {
    this.getProfile()
   }

  ngOnInit(): void {
  }

  getProfile()
  {
    this._activated.paramMap.subscribe(params => {
      this.username = params.get('username')
    })

    this._profile.getProfile(this.username).subscribe((data) => {
      this.name = data.user.name
      this.email = data.user.email
      this.userName=data.user.username
      
    })
 
  }

  backClicked() {
  
    this._location.back();
  }

}
