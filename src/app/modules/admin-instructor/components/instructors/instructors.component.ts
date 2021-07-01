import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminInstructorsService } from '../../services/admin-instructors.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeletedialogComponent } from 'src/app/modules/admin-instructor/components/deletedialog/deletedialog.component';
@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  constructor(private _adminIns:AdminInstructorsService,private _location: Location,public dialog: MatDialog) { }
  displayedColumns: string[] = ['name','username', 'email','action','view-detials'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {

    this.getInst();
  }

 backClicked() {
    this._location.back();
  }
  


  getInst()
  {
    this._adminIns.getAllInstructors().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource<any>(res.allInstructors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.allInstructors);
      
    })
  }
  openDialog(id: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      data: { i: id },
      height: '180px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() =>{
        this._adminIns.getAllInstructors().subscribe(res => {
          console.log(res);
          this.dataSource = new MatTableDataSource<any>(res.allInstructors);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res.allInstructors);
          
        })
      },500)
    });

  }

  instructorsearch(name: any) {

    this._adminIns.instructorsearch(name).subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res.searchResult);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

}
