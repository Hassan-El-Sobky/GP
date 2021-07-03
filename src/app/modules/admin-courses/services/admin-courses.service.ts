import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCoursesService {

  constructor(private _http:HttpClient) { }

  getAllCourses():Observable<any>{
    // return this._http.get("https://lmsapis.herokuapp.com/allCourses");
    return this._http.get("http://localhost:3000/allCourses");
  }

  udpatedState(id:any,data:object):Observable<any> {
    // return this._http.patch(`https://lmsapis.herokuapp.com/enableCourse/${id}`,data)
    return this._http.patch(`http://localhost:3000/enableCourse/${id}`,data)
  }

  deleteCourse(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    // return this._http.request('delete', `https://lmsapis.herokuapp.com/removeCourse/${id}`,{body:data});
    return this._http.request('delete', `http://localhost:3000/removeCourse/${id}`,{body:data});
  }

  courseSearch(name:any):Observable<any>
  {
      //  return this._http.get(`https://lmsapis.herokuapp.com/searchCourse/`,{params:new HttpParams().set('coursename',`${name}`)});
      return this._http.get(`http://localhost:3000/searchCourse/`,{params:new HttpParams().set('coursename',`${name}`)});
  }

}
