import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';


@Component({
  selector: 'signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _authentication:AuthenticationService,
    private tokenService: TokenService,
    private router: Router
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
         if(res.token)
         {
          this.tokenService.setToken(res.token);
          console.log(this.tokenService.isAuthenticated());
          
           this.router.navigate(['/test/test']);
         }
     
         
       })
   }

}
