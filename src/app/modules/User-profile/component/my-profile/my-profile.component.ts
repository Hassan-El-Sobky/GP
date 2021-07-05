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
  UserImage:any
  username = localStorage.getItem('username');
  user: any
  name: any
  email: any
  userName: any
  Password: any
  filex:any
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
      this.UserImage=data.user.imageUrl; 
      console.log(  this.user);

      this.profileForm.controls['name'].setValue(this.name)
      this.profileForm.controls['email'].setValue( this.email)
      this.profileForm.controls['username'].setValue(  this.userName)
     
    })
   ;
  }
  profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    oldpassword: new FormControl(),
    newpassword: new FormControl(),
    repassword: new FormControl(),
    

  })
 
  updatevalue(profileForm:any)
  {
    
   console.log(profileForm.value);
  //  {oldUserName,username,userImage ,oldPassword,password,rePassword,token}
    const formData=new FormData()
    formData.append("oldUserName",`${localStorage.getItem('username')}`)
    formData.append("username",`${profileForm.get('username').value}`)
    formData.append("oldPassword",`${profileForm.get('oldpassword').value}`)
    formData.append("password",`${profileForm.get('newpassword').value}`)
    formData.append("rePassword",`${profileForm.get('repassword').value}`)
    formData.append("userImage",`${this.UserImage}`)
    formData.append("token",`${localStorage.getItem('accessToken')}`)
    this._profile.editProfile(formData).subscribe(res=>{
      console.log(res);
      
    })

  }
 
 


  ngOnInit(): void {
  
   
  }

  selectFile(event: any) {
    const file:File = event.target.files[0];
    this.UserImage=file
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.defaultImage = event.target.result
      }
    }
  }

}
