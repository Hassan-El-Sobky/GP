import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCoursesService {

  constructor(private _http:HttpClient) { }


  // /studentcourses/:username


  getStudent(username:any):Observable<any>
  {
    return this._http.get(`https://lmsapis.herokuapp.com/studentcourses/${username}`);
  }

  uploadAss(data:any):Observable<any>
  {
    return this._http.post("https://lmsapis.herokuapp.com/uploadassigmentsSolution",data);
  }
}
