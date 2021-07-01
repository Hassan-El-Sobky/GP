import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminCoursesService } from 'src/app/modules/admin-courses/services/admin-courses.service';
import { AdminStudentsService } from './../../services/admin-students.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private _adminStudentServices:AdminStudentsService) { }
  token=localStorage.getItem('accessToken');
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
    token:this.token
    }
    console.log(data);
    console.log(id);
    
    
   this._adminStudentServices.deleteStudent(id,data).subscribe(res=>{
      console.log(res.message);
      
   })
   this.dialogRef.close();
  }

}
