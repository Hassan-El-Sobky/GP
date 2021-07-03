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
      // return this._httpClient.post('https://lmsapis.herokuapp.com/signin',userInfo);
      return this._httpClient.post('http://localhost:3000/signin',userInfo);
  }
  
  register(userInfo:any): Observable<any>
  {
    // return this._httpClient.post('https://lmsapis.herokuapp.com/signup',userInfo);
    return this._httpClient.post('http://localhost:3000/signup',userInfo);
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
