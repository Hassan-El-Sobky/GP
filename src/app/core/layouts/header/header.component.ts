import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { TokenService } from '../../services/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarToggle: boolean = false;
  contentMargin = 315;
  flagExpanded: boolean = false;
  flagNotiction: boolean = false;
  userName=localStorage.getItem('username')
  @Output() menuStatus = new EventEmitter();
  constructor(public tokenService: TokenService,private router:Router,private _generalService:GeneralService) {
        
        console.log(this._generalService.userName);
        
   }

  ngOnInit() {
  }
  logout() {
     this.tokenService.logout();
     location.reload(true);
     this.router.navigate(['/authentication/signin']);
  }
  onToolbarMenuToggle() {
    this.sideBarToggle = !this.sideBarToggle
    if (!this.menuStatus) {
      this.contentMargin = 100;
    }
    else {
      this.contentMargin = 315
    }
    if (this.sideBarToggle != true) {
      this.menuStatus.emit(true);
      // document.querySelector("mat-sidenav").classList.remove("menu-open");
      // document.querySelector("mat-sidenav").classList.add("menu-close");
      // document.querySelector("mat-sidenav").classList.add("menu-close");
      // document.querySelector(".mat-sidenav-content").classList.add("closed-menu");
    }
    else {
      this.menuStatus.emit(false);
      // document.querySelector("mat-sidenav").classList.remove("menu-close");
      // document.querySelector("mat-sidenav").classList.add("menu-open");
      // document.querySelector(".mat-sidenav-content").classList.remove("closed-menu");
    }
  }
  notiExpanded() {
    this.flagNotiction = !this.flagNotiction;
  }
  expaded() {

    this.flagExpanded = !this.flagExpanded;
  }

  veiwOnly()
  {
      //  this.flag.viewMode=true
  }
  veiwEdit()
  {
      //  this.flag.viewMode=false
  }
}
