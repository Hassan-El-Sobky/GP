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
    // return this._http.get(`https://lmsapis.herokuapp.com/studentcourses/${username}`);
    return this._http.get(`http://localhost:3000/studentcourses/${username}`);
  }

  uploadAss(data:any):Observable<any>
  {
    // return this._http.post("https://lmsapis.herokuapp.com/uploadassigmentsSolution",data);
    return this._http.post("http://localhost:3000/uploadassigmentsSolution",data);
  }

  getLectures(id:any):Observable<any>
  {
     //return this._http.get(`http://lmsapis.herokuapp.com/allLectures/${id}`);
     return this._http.get(`http://localhost:3000/allLectures/${id}`);
  }

  getassignments(id:any):Observable<any>
  {
    //  return this._http.get(`http://lmsapis.herokuapp.com/allAssigment/${id}`);
    return this._http.get(`http://localhost:3000/allAssigment/${id}`);
  }
  
  specificCourse(id:any):Observable<any>
  {
        //  return this._http.get(`https://lmsapis.herokuapp.com/course/${id}`);
        return this._http.get(`http://localhost:3000/course/${id}`);
  }

  getProfile(username:any):Observable<any>
  {
    // return this._http.get(`http://lmsapis.herokuapp.com/userProfile/${username}`)
    return this._http.get(`http://localhost:3000/userProfile/${username}`)
  }

  getExamsById(courseId:any,username:any):Observable<any>{
    // return this._http.get(`https://lmsapis.herokuapp.com/courseExams/${courseId}`)
    return this._http.get(`http://localhost:3000/courseExams/${courseId}/${username}`)
    
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

    // return this._http.get(`https://lmsapis.herokuapp.com/solveAssesment/${id}`)
    return this._http.get(`http://localhost:3000/solveAssesment/${id}`);
  }

  studentGrade(username:any,data:any):Observable<any>{
    // return this._http.post(`https://lmsapis.herokuapp.com/grade/${username}`,data)
    return this._http.post(`http://localhost:3000/grade/${username}`,data)
  }
  
  mygrade(courseId:any,username:any):Observable<any>{

    return this._http.get(`http://localhost:3000/courseGrades/${courseId}/${username}`)
  }

  searchGrade(AssessmentTitle: any ,id:any,username:any): Observable<any>{
    return this._http.get(`http://localhost:3000/searchGradeUser/${username}/${id}/?title=${AssessmentTitle}`)
  }
}
