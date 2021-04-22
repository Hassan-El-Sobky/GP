import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentsService {

  constructor(private _http:HttpClient) { }

  getStudent():Observable<any>
  {
    return this._http.get("https://lmsapis.herokuapp.com/allStudents")
  }
}
