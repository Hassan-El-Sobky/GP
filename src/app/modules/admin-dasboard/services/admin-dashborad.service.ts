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
      // return this._httpClient.get('https://lmsapis.herokuapp.com/allCourses');
      return this._httpClient.get('http://localhost:3000/allCourses');
  };

  getAllStudents(): Observable<any>
  {
      // return this._httpClient.get('https://lmsapis.herokuapp.com/allStudents');
      return this._httpClient.get('http://localhost:3000/allStudents');
  };

  getAllInstructors(): Observable<any>
  {
      // return this._httpClient.get('https://lmsapis.herokuapp.com/allInstructors');
      return this._httpClient.get('http://localhost:3000/allInstructors');
  };
  getAllPendingCourses(): Observable<any>
  {
    // return this._httpClient.get('https://lmsapis.herokuapp.com/allPendingCourses ');
    return this._httpClient.get('http://localhost:3000/allPendingCourses ');
  }

  getAllAvalCourses(): Observable<any>
  {
    // return this._httpClient.get('https://lmsapis.herokuapp.com/allAvailableCourses')
    return this._httpClient.get('http://localhost:3000/allAvailableCourses')
  }

 getcourseStudents(courseId:any): Observable<any> /*el students ely msgleen course mo3yn*/ 
  {
  //  return this._httpClient.get(`http://lmsapis.herokuapp.com/courseStudents/courseId=${courseId}`
  return this._httpClient.get(`http://localhost:3000/courseStudents/courseId=${courseId}`)
   
  }
  getCourselectures(courseId:any): Observable<any>
  {
    // return this._httpClient.get(`http://lmsapis.herokuapp.com/allAssigment/courseId=${courseId}`)
    return this._httpClient.get(`http://localhost:3000/allAssigment/courseId=${courseId}`)
  }

}
