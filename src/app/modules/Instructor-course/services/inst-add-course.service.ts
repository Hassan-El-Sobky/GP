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

  instructorCourses(username:any):Observable<any>
  {
         return this._http.get(`https://lmsapis.herokuapp.com/insrtuctorCourses/${username}`);
  }
 

  
  specificCourse(id:any):Observable<any>
  {
         return this._http.get(`https://lmsapis.herokuapp.com/course/${id}`);
  }

  lecUpload(data:any):Observable<any>{
    return this._http.post("https://lmsapis.herokuapp.com/uploadLecture",data);
  }
  
  courseLectures(id:any):Observable<any>
  {
       return this._http.get(`http://lmsapis.herokuapp.com/allLectures/${id}`);
  }
  courseAssigments(id:any):Observable<any>
  {
    return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
  }
  // https://lmsapis.herokuapp.com/uploadassigments

  assUpload(data:any):Observable<any>
  {
    return this._http.post("https://lmsapis.herokuapp.com/uploadassigments",data);
  }
  
  coursesAssignment(id:any):Observable<any>
  {
    return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
  }

  courseStudent(id:any):Observable<any>
  {
     return this._http.get(`https://lmsapis.herokuapp.com/courseStudents/${id}`);
  }

  createAssments(data:any):Observable<any>
  {
    return this._http.post(`https://lmsapis.herokuapp.com/createAssesment`,data);
  }

  deleteass(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    return this._http.request('delete', `https://lmsapis.herokuapp.com/deleteAssigment/${id}`,{body:data});
  }

  deleteLecture(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    return this._http.request('delete', `https://lmsapis.herokuapp.com/deleteLecture/${id}`,{body:data});
  }
}