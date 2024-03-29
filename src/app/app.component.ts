import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './core/services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Nozol';
  imgSrc: string = 'assets/photo.jpeg'
  Logo: string = 'assets/logo.PNG'
  showFiller = false;
  flagExpanded: boolean = false
  flagNotiction: boolean = false
  sideBarToggle: boolean = true;
  contentMargin = 315;
  loggedUserState: boolean = false;
  isUserAuth: boolean = false;
  menuOpened: boolean = true;
  expaded() {

    this.flagExpanded = !this.flagExpanded;
  }
  notiExpanded() {
    this.flagNotiction = !this.flagNotiction;
  }
  // onToolbarMenuToggle() {
  //   this.sideBarToggle = !this.sideBarToggle
  //   if (!this.sideBarToggle) {
  //     this.contentMargin = 100;
  //   }
  //   else {
  //     this.contentMargin = 315
  //   }
  // }

  constructor(public tokenService: TokenService, private router: Router ) { }

  ngOnInit() {


  }
  GetMenuStatus(e:any) {
    debugger;
    this.menuOpened = e;
    if (!this.menuOpened) {
      this.contentMargin = 100;
    }
    else {
      this.contentMargin = 315;
    }
  }

}
