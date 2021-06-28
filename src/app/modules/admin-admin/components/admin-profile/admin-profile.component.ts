import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validator, FormControlName } from '@angular/forms';
import { AdmiProfileService } from '../../services/admin-profile.service'

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  defaultImage: string = '/assets/images/squared.jpg';
  id: any;
  user: any;
  courses: any
  totalLength: any;
  page: number = 1;
  role=localStorage.getItem('role');

  constructor(private _AdminProfileService: AdmiProfileService, private _activated: ActivatedRoute) {
    // this.getProfile()
  }

  ngOnInit(): void {
    
  }
 
  profileform = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    
  })
  // getProfile()
  // {
  //   this._AdminProfileService.getProfile('60abacd4e5ee54001542a77d').subscribe((data) => {
  //     this.user = data.user
  //     this.courses=data.instructorCourses
  //     console.log(data.instructorCourses);
  //     this.profileform.controls['name'].setValue(this.user.name)
  //     this.profileform.controls['email'].setValue(this.user.email)
  //     this.profileform.controls['username'].setValue(this.user.username)
  //     this.profileform.controls['password'].setValue(this.user.password)
      
  //   })
 
  // }
 
 

  

  // getId() {
  //   this._activated.paramMap.subscribe(params => {
  //     this.id = params.get('id');
  //     console.log(this.id);
      
  //   });
  // }
  selectFile(event: any)
  {
        if(event.target.files)
    {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.defaultImage = event.target.result
      }
    }
  }

}
