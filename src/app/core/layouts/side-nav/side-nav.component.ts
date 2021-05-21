import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideBarToggle: boolean = true;
  contentMargin = 315;
  Logo: string = 'assets/logo.PNG'
  @Input() menuStatus: boolean = false;
  userName=localStorage.getItem('username');
  constructor() { }

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
  ngOnDestroy() {
    // document.querySelector("body").removeAttribute("id");
  }
}
