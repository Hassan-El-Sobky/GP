import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

import { AdmiProfileService } from '../../services/admin-profile.service';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  defaultImage: string = '/assets/images/squared.jpg';
  flag: any;
  filex:any
  constructor(private _addAdmin:AdmiProfileService,private _location: Location) {
    this.flag="male"
   }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    var re = /(?:\.([^.]+))?$/;
  //  let data=
  //  {name:form.value.name,
  //   email:form.value.email,
  //   password:form.value.password,
  //   password_confirmation:form.value.password_confirmation,
  // } 
  const data= {name:form.value.name , username:form.value.userName , email:form.value.email , password:form.value.password
     , rePassword:form.value.password_confirmation , gender:form.value.gender , token:localStorage.getItem('accessToken') }

     const formData= new FormData();
     formData.append('name',form.value.name)
     formData.append('username',form.value.userName)
     formData.append('email',form.value.email)
     formData.append('password',form.value.password)
     formData.append('rePassword',form.value.password_confirmation)
     formData.append('gender',form.value.gender)
     formData.append('token',`${localStorage.getItem('accessToken')}`)
     formData.append('userImage',this.filex);

    this._addAdmin.addInstructors(data).subscribe(res=>{
      console.log(res);
      
    })
   console.log(data);
   
  }
  backClicked() {
    this._location.back();
  }

  selectFile(event:any)
  {
    const file:File = event.target.files[0];
    this.filex=file
     if(event.target.files)
     {
       let reader = new FileReader();
       reader.readAsDataURL(event.target.files[0]);
        reader.onload=(event:any)=>{
          this.defaultImage=event.target.result
        }
     }
  }



}