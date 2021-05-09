import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminCoursesService } from '../../services/admin-courses.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private _adminCousrsServices:AdminCoursesService) { }
  token:any;
  ngOnInit(): void {
    this.token=localStorage.getItem("accessToken");
    console.log(typeof(this.token));
    
  }


  onNoClick()
  {
    this.dialogRef.close();
    
  }
  delete(id:any)
  {
     let data={
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VybmFtZSI6Imhhc3NhbiIsImlhdCI6MTYxOTgyMzU3MH0.Uwnu_dQxAqkIXeSfvNA6hSp2fX2H00tfFU31FMl4ZGQ"
    }
   console.log(id);
   this._adminCousrsServices.deleteCourse(id,data).subscribe(res=>{
      console.log(res.message);
      // if(res.message="course Removed")
      // {
      //   this._adminCousrsServices.getAllCourses();
      // } else {
      //   console.log('there is error in token');
        
      // }
   })
   this.dialogRef.close();
  }

}
