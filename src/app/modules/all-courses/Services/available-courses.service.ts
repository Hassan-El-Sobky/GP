import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableCoursesService {

  constructor(private _Http: HttpClient) { }

  getAllAvailabeCourses(): Observable<any> {
    // return this._Http.get("https://lmsapis.herokuapp.com/allAvailableCourses");
    return this._Http.get("http://localhost:3000/allAvailableCourses");
  }

  getAllCourses(): Observable<any> {
    // return this._Http.get("https://lmsapis.herokuapp.com/allCourses");
    return this._Http.get("http://localhost:3000/allCourses");
  }

  getAllpending(): Observable<any> {
    // return this._Http.get("https://lmsapis.herokuapp.com/allPendingCourses");
    return this._Http.get("http://localhost:3000/allPendingCourses");
  }

  studentRegisterCourse(data: any): Observable<any> {
   // return this._Http.post('https://lmsapis.herokuapp.com/registerCourse', data);
    return this._Http.post('http://localhost:3000/registerCourse', data);
  }

  courseSearch(name: any) {
    // return this._Http.get(`https://lmsapis.herokuapp.com/searchCourse/?coursename=${name}`);
    return this._Http.get(`http://localhost:3000/searchCourse/?coursename=${name}`);
  }

  specificCourse(id: any): Observable<any> {
    // return this._Http.get(`https://lmsapis.herokuapp.com/course/${id}`);
    return this._Http.get(`http://localhost:3000/course/${id}`);
  }

  userProfile(id: any): Observable<any> {
    // return this._Http.get(`http://lmsapis.herokuapp.com/Profile/${id}`);
    return this._Http.get(`http://localhost:3000/Profile/${id}`);
  }


  getcourseStudents(courseId: any): Observable<any> /*el students ely msgleen course mo3yn*/ {
    // return this._Http.get(`http://lmsapis.herokuapp.com/courseStudents/courseId=${courseId}`)
    return this._Http.get(`http://localhost:3000/courseId=${courseId}`)

  }
  getCourselectures(courseId: any): Observable<any> {
    // return this._Http.get(`http://lmsapis.herokuapp.com/allAssigment/courseId=${courseId}`)
    return this._Http.get(`http://localhost:3000/allAssigment/courseId=${courseId}`)
  }



}
