import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminCoursesService } from '../../services/admin-courses.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private _adminCousrsServices:AdminCoursesService) { }
  token=localStorage.getItem('accessToken');
  ngOnInit(): void {
    this.token=localStorage.getItem("accessToken");
    console.log(typeof(this.token));
    
  }


  onNoClick()
  {
    this.dialogRef.close();
    
  }
 async delete(id:any)
  {
    let data={
    token:this.token
    }
    console.log(data);
    console.log(id);
    
    
   this._adminCousrsServices.deleteCourse(id,data).subscribe(res=>{
      console.log(res.message);
      
   })
   this.dialogRef.close();
  }

}
