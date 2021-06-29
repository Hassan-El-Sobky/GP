import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {
id:any
  constructor(public dialogRef: MatDialogRef<DeletedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private _activated:ActivatedRoute,
  private _instS:InstAddCourseService
  
  ) { }

  ngOnInit(): void {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    })  
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
      courseId:cId
    }
    console.log(data);
    
    this._instS.deleteass(id,data).subscribe(res=>{
      console.log(res);
      
    })
        
 
   this.dialogRef.close();
  }
}
