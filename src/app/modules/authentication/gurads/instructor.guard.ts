import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorGuard implements CanActivate {
  constructor( private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const role=localStorage.getItem('role');
     if (role!="instructor") {
      this.router.navigate(['test', 'test']);
      return false;
    }
    this.router.navigate(['instructor','myCourse']);
    return true;
     
  }
  
}
