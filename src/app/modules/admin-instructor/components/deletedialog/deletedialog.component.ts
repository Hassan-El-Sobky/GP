import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminInstructorsService } from '../../services/admin-instructors.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  token = localStorage.getItem('accessToken');
  
  constructor(public dialogRef: MatDialogRef<DeletedialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private _adminInstructorServices:AdminInstructorsService) { }
  
  ngOnInit(): void {
    this.token=localStorage.getItem("accessToken");
    console.log(typeof(this.token));
  }

  onNoClick()
  {
    this.dialogRef.close();
    
  }
//  delete(id:any)
//   {
//     let data={
//     token:this.token
//     }
//     console.log(data);
//     console.log(id);
    
    
//    this._adminInstructorServices.deleteStudent(id,data).subscribe(res=>{
//       console.log(res.message);
      
//    })
//    this.dialogRef.close();
//   }

  // 
}
