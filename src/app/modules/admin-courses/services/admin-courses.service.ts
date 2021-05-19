import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCoursesService {

  constructor(private _http:HttpClient) { }

  getAllCourses():Observable<any>{
    return this._http.get("https://lmsapis.herokuapp.com/allCourses");
  }

  udpatedState(id:any,data:object):Observable<any> {
    return this._http.patch(`https://lmsapis.herokuapp.com/enableCourse/${id}`,data)
  }

  deleteCourse(id:any,token:any):Observable<any> {
    return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,token)
  }

}
