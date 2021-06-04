import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { StudentCoursesService } from '../../services/student-courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  username=localStorage.getItem('username');
  constructor(private _stuServices:StudentCoursesService,  private cdref: ChangeDetectorRef) { }
  stuCoursesArr:any
  totalLength:any;
  page:number=1;
  ngOnInit(): void {
    this._stuServices.getStudent(this.username).subscribe(res=>{
      console.log(res);
        this.stuCoursesArr=res.studentCourses;
        this.totalLength=res.studentCourses.length;
    })
  
  }
  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
}
function ngAfterContentChecked() {
  throw new Error('Function not implemented.');
}

