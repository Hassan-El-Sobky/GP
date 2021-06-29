import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';
import { DeletedialogComponent } from 'src/app/modules/admin-student/components/deletedialog/deletedialog.component';
import { AdminStudentsService } from '../../services/admin-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'username', 'email','Gender','action','view-detials'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _adminStu:AdminStudentsService,public dialog: MatDialog,private _location: Location) { }

  ngOnInit(): void {
    this.getAllStu();
  }

  backClicked() {
  
    this._location.back();
  }


  getAllStu()
  {
    this._adminStu.getStudent().subscribe(res => {
      console.log(res);
      
      this.dataSource = new MatTableDataSource<any>(res.allStudents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  openDialog(id:any)
  {
    console.log(id);
    
   const dialogRef = this.dialog.open(DeletedialogComponent, {
     data:{i:id},
     height: '180px',
     width: '250px',
 });
        
 dialogRef.afterClosed().subscribe(result => {
     
    setTimeout(()=>{
      this._adminStu.getStudent().subscribe(res => {
        console.log(res);
        
        this.dataSource = new MatTableDataSource<any>(res.allStudents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    },500)
 });
   
  }
}
