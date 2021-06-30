import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getLectures(id:any):Observable<any>
  {
     return this._http.get(`http://lmsapis.herokuapp.com/allLectures/${id}`);
  }

  getassignments(id:any):Observable<any>
  {
     return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
  }
  
  specificCourse(id:any):Observable<any>
  {
         return this._http.get(`https://lmsapis.herokuapp.com/course/${id}`);
  }

  getProfile(username:any):Observable<any>
  {
    return this._http.get(`http://lmsapis.herokuapp.com/userProfile/${username}`)
  }

  getExamsById(courseId:any):Observable<any>{
    return this._http.get(`https://lmsapis.herokuapp.com/courseExams/${courseId}`)
  }

  besmallah(data:any):Observable<any>{
    const headers=new HttpHeaders().set('token',"b0d1e7ed7cfd48a0b4db678cf5d70343")
    return this._http.post(`https://api.luxand.cloud/subject/v2`,data,{headers:headers})
  }  
  
  faceVerifed(faceId:any,data:any):Observable<any>{
    const headers=new HttpHeaders().set('token',"b0d1e7ed7cfd48a0b4db678cf5d70343")
    return this._http.post(`https://api.luxand.cloud/photo/verify/${faceId}`,data,{headers:headers})
  }

  getSpecificExam(id:any):Observable<any>{

    return this._http.get(`https://lmsapis.herokuapp.com/solveAssesment/${id}`);
  }

}
