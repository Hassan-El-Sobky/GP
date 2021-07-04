import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  defaultImage: string = '/assets/images/squared.jpg';
  username = localStorage.getItem('username');
  user: any
  name: any
  email: any
  userName: any
  Password: any
  constructor( private _profile:ProfileService  ) {
    this.getProfile();

  }


  
  getProfile() {
    this._profile.getProfile(this.username).subscribe((data) => {
      this.user = data.user
      this.name= data.user.name
      this.email = data.user.email
      this.userName = data.user.username
      this.Password = data.user.password  
      console.log(  this.user);

      this.profileForm.controls['name'].setValue(this.name)
      this.profileForm.controls['email'].setValue( this.email)
      this.profileForm.controls['username'].setValue(  this.userName)
      this.profileForm.controls['password'].setValue(this.Password)
    })
   ;
  }
  profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    

  })
 
  updatevalue(profileForm:any)
  {
    
   console.log(profileForm.value);
   
    

  }
 
 


  ngOnInit(): void {
  
   
  }

  selectFile(event: any) {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.defaultImage = event.target.result
      }
    }
  }

}
