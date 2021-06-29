import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentsService {

  constructor(private _http: HttpClient) { }

  getStudent(): Observable<any> {
    return this._http.get("https://lmsapis.herokuapp.com/allStudents")
  }

  deleteStudent(id: any, data: any): Observable<any> {
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    return this._http.request('delete', ` https://lmsapis.herokuapp.com/removeUser/${id}`, { body: data });
  }

  studentsearch(name: any):Observable<any>
    {
    return this._http.get('')
    }
   
  
}
