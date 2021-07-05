import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminInstructorsService } from '../../services/admin-instructors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {
  defaultImage: string = '/assets/images/squared.jpg';
  flag: any;
  isTrue: any;
  show = false;
  constructor(private _adminInsServ:AdminInstructorsService,private _router:Router) {
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
      console.log(res.message);

      if (res.message == `Instructor${form.value.userName}Created`)
        {
          this.show=true
          this.isTrue = true
         
        }
        else
      {
        this.show=true
          this.isTrue = false

          
        }


    })
   console.log(data);
   
  }

  close()
  {
    
    this.show = false;
    this._router.navigate([]);
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
