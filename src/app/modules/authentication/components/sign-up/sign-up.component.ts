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
  constructor(private _authServ: AuthenticationService, private _Router: Router) {
   }
 
  flag: boolean = false;

  getRegisterInfo(registerForm:any) {
    
    if (registerForm.valid == true) {
      this._authServ.register(registerForm.value).subscribe((data) => {
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
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null, [Validators.required,]),
      "email": new FormControl(null, [Validators.required,]),
      "username": new FormControl(null, [Validators.required,]),
      "role": new FormControl(null, [Validators.required,]),
      "gender": new FormControl(null, [Validators.required,]),
      "password": new FormControl(null, [Validators.required,]),
      "rePassword": new FormControl(null, [Validators.required,])
    });
  }

}
