import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstAddCourseService {

  constructor(private _http: HttpClient) { }
  
  addCourse(data:any):Observable<any>
  {
   return this._http.post("https://lmsapis.herokuapp.com/addCourse",data)
  }
}
