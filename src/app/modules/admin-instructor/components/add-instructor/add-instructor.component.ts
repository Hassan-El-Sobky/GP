import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminInstructorsService } from '../../services/admin-instructors.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {
  defaultImage: string = '/assets/images/squared.jpg';
  flag: any;
  constructor(private _adminInsServ:AdminInstructorsService) {
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

    this._adminInsServ.addInstructors(data).subscribe(res=>{
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
