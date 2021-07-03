import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInstructorsService {

  constructor(private _http:HttpClient) { }


  getAllInstructors():Observable<any>
  {
  //  return this._http.get("https://lmsapis.herokuapp.com/allInstructors")
  return this._http.get("http://localhost:3000/allInstructors")
  } 

  addInstructors(data:any):Observable<any>
  {
  //  return this._http.post("https://lmsapis.herokuapp.com/addInstructor",data)
  return this._http.post("http://localhost:3000/addInstructor",data)
  }
  deleteInstructor(id:any,data:any):Observable<any>{
    //return this._http.delete(`https://lmsapis.herokuapp.com/removeCourse/${id}`,data) 
    // return this._http.request('delete', ` https://lmsapis.herokuapp.com/removeUser/${id}`,{body:data});
    return this._http.request('delete', ` http://localhost:3000/removeUser/${id}`,{body:data});
  }
  instructorsearch(name: any): Observable<any>
  {
    // return this._http.get(`https://lmsapis.herokuapp.com/searchInstructor/?username=${name}`)
    return this._http.get(`https://localhost:3000/searchInstructor/?username=${name}`)
  }
}
