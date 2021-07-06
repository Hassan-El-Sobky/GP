import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Location } from '@angular/common';

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
  dis=true
  constructor( private _profile:ProfileService,private _location:Location,private router:Router) {
    this.getProfile();

  }


  backClicked()
  {
    this._location.back()
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
    email: new FormControl({value: '', disabled:true}),
    username: new FormControl({value: '', disabled:true}),
    oldpassword: new FormControl('',Validators.required),
    newpassword: new FormControl(),
    repassword: new FormControl(),
    

  })
 
  updatevalue(profileForm:any)
  {
    
  //  console.log(profileForm.value);
  // { name ,username ,oldPassword,password , rePassword , userImage}
    const formData=new FormData()

    formData.append("username",`${localStorage.getItem('username')}`)
    formData.append("name",`${profileForm.get('name').value}`)
    formData.append("oldPassword",`${profileForm.get('oldpassword').value}`)
    formData.append("password",`${profileForm.get('newpassword').value}`)
    formData.append("rePassword",`${profileForm.get('repassword').value}`)
    formData.append("userImage",this.filex)
  console.log(formData);
  
    this._profile.editProfile(formData).subscribe(res=>{
      console.log(res);
      if(res.message="updated")
      {
        localStorage.removeItem('accessToken')
        this.router.navigate(['/authentication/signin']);
      }
    
    })

  }
 
 


  ngOnInit(): void {
  
   
  }

  selectFile(event: any) {
    const file:File = event.target.files[0];
    this.filex=file

    
    
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.UserImage= event.target.result
      }
    }
  }

}
