import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInstructorsService {

  constructor(private _http:HttpClient) { }


  getAllInstructors():Observable<any>
  {
   return this._http.get("https://lmsapis.herokuapp.com/allInstructors")
  } 

  addInstructors(data:any):Observable<any>
  {
   return this._http.post("https://lmsapis.herokuapp.com/addInstructor",data)
  }
}
