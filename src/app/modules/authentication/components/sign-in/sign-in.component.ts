import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  logoImage: string ='/assets/logo.png';
  status: any;
  constructor(private _authentication:AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private _generalService:GeneralService
    ) { }

  ngOnInit(): void {

  }
 
  onSubmit(form:NgForm)
  {
       let userInfo={
         email:form.value.email,
         password:form.value.password
       }

       console.log(userInfo);
       

       this._authentication.logIn(userInfo).subscribe(res=>{
         console.log(res);
         this.status=res.status
         console.log(this.status);
         
         
         if(res.token)
         {
          this.tokenService.setToken(res.token);

           console.log(this.tokenService.isAuthenticated());

            localStorage.setItem('username',res.uname);
             localStorage.setItem('role',res.roole);
          console.log(this.tokenService.isAuthenticated());
          this._generalService.userName=res.message;
          console.log(this._generalService.userName);
      
        
          this.router.navigate(['adminAnaylsis/dashboard']);

          //  this.router.navigate(['/test']);
         }
     
         
       })
   }

}
