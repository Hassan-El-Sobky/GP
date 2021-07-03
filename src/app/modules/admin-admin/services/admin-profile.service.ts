import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdmiProfileService {

  constructor(private _http:HttpClient) { }
  addInstructors(data:any):Observable<any>
  {
  //  return this._http.post("https://lmsapis.herokuapp.com/addAdmin",data)
   return this._http.post("http://localhost:3000/addAdmin",data)
  }

}
