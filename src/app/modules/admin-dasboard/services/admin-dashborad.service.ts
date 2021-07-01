import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboradService {

  constructor(private _httpClient:HttpClient) { }
  
  getAllcourses(): Observable<any>
  {
      return this._httpClient.get('https://lmsapis.herokuapp.com/allCourses');
  };

  getAllStudents(): Observable<any>
  {
      return this._httpClient.get('https://lmsapis.herokuapp.com/allStudents');
  };

  getAllInstructors(): Observable<any>
  {
      return this._httpClient.get('https://lmsapis.herokuapp.com/allInstructors');
  };
  getAllPendingCourses(): Observable<any>
  {
    return this._httpClient.get('https://lmsapis.herokuapp.com/allPendingCourses ');
  }

  getAllAvalCourses(): Observable<any>
  {
    return this._httpClient.get('https://lmsapis.herokuapp.com/allAvailableCourses')
  }

 getcourseStudents(courseId:any): Observable<any> /*el students ely msgleen course mo3yn*/ 
  {
   return this._httpClient.get(`http://lmsapis.herokuapp.com/courseStudents/courseId=${courseId}`)
   
  }
  getCourselectures(courseId:any): Observable<any>
  {
    return this._httpClient.get(`http://lmsapis.herokuapp.com/allAssigment/courseId=${courseId}`)
  }

}
