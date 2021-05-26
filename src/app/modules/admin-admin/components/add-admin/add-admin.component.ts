import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmiProfileService } from '../../services/admin-profile.service';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  defaultImage: string = '/assets/images/squared.jpg';
  flag: any;
  constructor(private _addAdmin:AdmiProfileService) {
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

    this._addAdmin.addInstructors(data).subscribe(res=>{
      console.log(res);
      
    })
   console.log(data);
   
  }
  selectFile(event:any)
  {
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