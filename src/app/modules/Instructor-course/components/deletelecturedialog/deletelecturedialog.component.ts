import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-deletelecturedialog',
  templateUrl: './deletelecturedialog.component.html',
  styleUrls: ['./deletelecturedialog.component.scss']
})
export class DeletelecturedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletelecturedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private _instS:InstAddCourseService
  ) { }

  ngOnInit(): void {
  }

  onNoClick()
  {
    this.dialogRef.close();
    
  }
delete(id:any,cId:any)
  {
    const data={
      token:localStorage.getItem('accessToken'),
      username:localStorage.getItem('username'),
      courseId: cId
      
  }
  console.log(data);
  
        this._instS.deleteLecture(id,data).subscribe(res=>{
          console.log(res);
          
        })
 
   this.dialogRef.close();
  }

}
