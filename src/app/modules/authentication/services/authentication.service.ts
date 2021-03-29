import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   
  constructor(private _httpClient:HttpClient) { }


  logIn(userInfo:object):Observable<any>
  {
      return this._httpClient.post('https://lmsapis.herokuapp.com/signin',userInfo);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
