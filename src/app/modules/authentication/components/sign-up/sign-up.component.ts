import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router'
@Component({
  selector: 'signUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  logoImage: string ='/assets/logo.png';
  registerForm:any;
filex:any
  constructor(private _authServ: AuthenticationService, private _Router: Router) {
   }
 
  flag: boolean = false;

  getRegisterInfo(registerForm:any) {
    
    

    let formData=new FormData();
    formData.append('name',`${this.registerForm.get('name').value}`);
    formData.append('email',`${this.registerForm.get('email').value}`);
    formData.append('username',`${this.registerForm.get('username').value}`);
    formData.append('role',`${this.registerForm.get('role').value}`);
    formData.append('gender',`${this.registerForm.get('gender').value}`);
    formData.append('password',`${this.registerForm.get('password').value}`);
    formData.append('rePassword', `${this.registerForm.get('rePassword').value}`);
    formData.append('mobilePhone',`0${this.registerForm.get('mobilePhone').value}`);
    formData.append('userImage',this.filex);
    console.log(registerForm.value);
    

    if (registerForm.valid == true) {
      this._authServ.register(formData).subscribe((data) => {
        console.log(data);
        this._Router.navigate(['authentication', 'signin'])
        if (data.message == `user${data.username}Created`) {
          this._Router.navigate(['authentication', 'signin']);
        }
        else {
          this.flag = true;
        }
      })
    }
    

  }
  
  selectFile(event:any)
  {
     const file:File = event.target.files[0];
     this.filex=file
  console.log(this.filex);
  
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null, [Validators.required,]),
      "email": new FormControl(null, [Validators.required,]),
      "username": new FormControl(null, [Validators.required,]),
      "role": new FormControl("student", [Validators.required,]),
      "gender": new FormControl(null, [Validators.required,]),
      "password": new FormControl(null, [Validators.required,]),
      "mobilePhone": new FormControl(null, [Validators.required,]),
      "rePassword": new FormControl(null, [Validators.required,]),
      "userImage":new FormControl(null,[Validators.required])
    });
  }

}
