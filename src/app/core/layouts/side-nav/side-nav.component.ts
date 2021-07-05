import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { TokenService } from '../../services/token.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideBarToggle: boolean = true;
  contentMargin = 315;
  logoImage: string ='/assets/logo.png';
  @Input() menuStatus: boolean = false;
  userName=localStorage.getItem('username');
  userImage=localStorage.getItem('userImage');
  role=localStorage.getItem('role');
  X:any
  constructor(public tokenService: TokenService,private router:Router,private _generalService:GeneralService) {

   if(this.role=="admin")
    { 
         this.X="Admin";
    }
   }

  ngOnInit() {
  }
  onToolbarMenuToggle() {
    this.sideBarToggle = !this.sideBarToggle
    if (!this.sideBarToggle) {
      this.contentMargin = 100;
    }
    else {
      this.contentMargin = 315
    }
  }
  logout() {
    this.tokenService.logout();
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    location.reload(true);
    this.router.navigate(['/authentication/signin']);
 }
  ngOnDestroy() {
    // document.querySelector("body").removeAttribute("id");
  }
}
