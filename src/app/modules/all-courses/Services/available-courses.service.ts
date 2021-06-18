import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableCoursesService {

  constructor(private _Http: HttpClient) { }
  
  getAllAvailabeCourses():Observable<any>
  {
   return this._Http.get("https://lmsapis.herokuapp.com/allAvailableCourses");
  }

  getAllCourses(): Observable<any>
  {
    return this._Http.get("https://lmsapis.herokuapp.com/allCourses");
  }

  getAllpending(): Observable<any>
  {
    return this._Http.get("https://lmsapis.herokuapp.com/allPendingCourses");
  }

  studentRegisterCourse(data:any):Observable<any>
  {
   return this._Http.post('https://lmsapis.herokuapp.com/registerCourse',data);
  }

  courseSearch(name: any)
  {
    return this._Http.get(`https://lmsapis.herokuapp.com/searchCourse/?coursename=${name}`);
  }

  specificCourse(id:any):Observable<any>
  {
         return this._Http.get(`https://lmsapis.herokuapp.com/course/${id}`);
  }

  userProfile(id:any):Observable<any>
  {
    return this._Http.get(`http://lmsapis.herokuapp.com/userProfile/${id}`);
  }

  
}
