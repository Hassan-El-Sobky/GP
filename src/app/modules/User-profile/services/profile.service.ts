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

<<<<<<< HEAD
=======
  editProfile(data:any):Observable<any> {
    return this._http.put("http://localhost:3000/userEdit",data)
  }
>>>>>>> 17cb54274e06dfc7d3ae537f5ac5ad60b3f71832
}
