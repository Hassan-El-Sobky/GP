import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminInstructorsService } from '../../services/admin-instructors.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  constructor(private _adminIns:AdminInstructorsService,private _location: Location) { }
  displayedColumns: string[] = ['name','username', 'email','Gender','action','view-detials'];
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
    this._adminIns.getAllInstructors().subscribe(res=>{
      this.dataSource = new MatTableDataSource<any>(res.allInstructors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.allInstructors);
      
    })
  }

}
