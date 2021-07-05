import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http:HttpClient) { }

  getProfile(username:any):Observable<any>
  {
    // return this._http.get(`http://lmsapis.herokuapp.com/userProfile/${username}`)
    return this._http.get(`http://localhost:3000/userProfile/${username}`)
  }

  editProfile(data:any):Observable<any> {
    return this._http.request("put","http://localhost:3000/editUser",{body:data})
  }
}
