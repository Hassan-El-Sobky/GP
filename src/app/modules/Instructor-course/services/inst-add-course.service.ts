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
  //  return this._http.post("https://lmsapis.herokuapp.com/addCourse",data)
  return this._http.post("http://localhost:3000/addCourse",data)
  }

  instructorCourses(username:any):Observable<any>
  {
        //  return this._http.get(`https://lmsapis.herokuapp.com/insrtuctorCourses/${username}`);
        return this._http.get(`http://localhost:3000/insrtuctorCourses/${username}`);
        
  }
 

  
  specificCourse(id:any):Observable<any>
  {
        //  return this._http.get(`https://lmsapis.herokuapp.com/course/${id}`);
        return this._http.get(`http://localhost:3000/course/${id}`);
  }

  lecUpload(data:any):Observable<any>{
    // return this._http.post("https://lmsapis.herokuapp.com/uploadLecture",data);
    return this._http.post("http://localhost:3000/uploadLecture",data);
  }
  
  courseLectures(id:any):Observable<any>
  {
      //  return this._http.get(`http://lmsapis.herokuapp.com/allLectures/${id}`);
      return this._http.get(`http://localhost:3000/allLectures/${id}`);
  }
  courseAssigments(id:any):Observable<any>
  {
    // return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
    return this._http.get(`http://localhost:3000/allAssigment/${id}`);
  }
  // https://lmsapis.herokuapp.com/uploadassigments

  assUpload(data:any):Observable<any>
  {
    // return this._http.post("https://lmsapis.herokuapp.com/uploadassigments",data);
    return this._http.post("http://localhost:3000/uploadassigments",data);
  }
  
  coursesAssignment(id:any):Observable<any>
  {
    // return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
    return this._http.get(`http://localhost:3000/allAssigment/${id}`);
  }

  courseStudent(id:any):Observable<any>
  {
    //  return this._http.get(`https://lmsapis.herokuapp.com/courseStudents/${id}`);
    return this._http.get(`http://localhost:3000/courseStudents/${id}`);
  }

  createAssments(data:any):Observable<any>
  {
    // return this._http.post(`https://lmsapis.herokuapp.com/createAssesment`,data);
    return this._http.post(`http://localhost:3000/createAssesment`,data);
  }

  deleteass(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
   // return this._http.request('delete', `https://lmsapis.herokuapp.com/deleteAssigment/${id}`,{body:data});
   return this._http.request('delete', `http://localhost:3000/deleteAssigment/${id}`,{body:data});
  }

  deleteLecture(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    // return this._http.request('delete', `https://lmsapis.herokuapp.com/deleteLecture/${id}`,{body:data});
    return this._http.request('delete', `http://localhost:3000/deleteLecture/${id}`,{body:data});
  }

  getExamsById(courseId:any):Observable<any>{
    // return this._http.get(`https://lmsapis.herokuapp.com/courseExams/${courseId}`)
    return this._http.get(`http://localhost:3000/courseExams/${courseId}`)
  }

}