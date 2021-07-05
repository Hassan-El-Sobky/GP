import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstAddCourseService } from '../../services/inst-add-course.service';
@Component({
  selector: 'app-deletedialogexam',
  templateUrl: './deletedialogexam.component.html',
  styleUrls: ['./deletedialogexam.component.scss']
})
export class DeletedialogexamComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogexamComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private _inst:InstAddCourseService) { }

  ngOnInit(): void {
  }
  onNoClick()
  {
    this.dialogRef.close();
    
  }
delete(id:any)
{
  const data = {
    username: localStorage.getItem('username'),
    token:localStorage.getItem('accessToken')
  }
   

    console.log(id,data);
    
        this._inst.deleteExams(id,data).subscribe(res=>{
          console.log(res);
          
        })
 
   this.dialogRef.close();
  }

}
