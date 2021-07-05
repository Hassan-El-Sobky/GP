import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AdminStudentsService } from '../../services/admin-students.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-studentallgrades',
  templateUrl: './studentallgrades.component.html',
  styleUrls: ['./studentallgrades.component.scss']
})
export class StudentallgradesComponent implements OnInit {

  displayedColumns: string[] = [ 'name','title','grade'];
  defaultImage: string = '/assets/images/default image.png';
  dataSource:any;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _activated:ActivatedRoute,private _adminS:AdminStudentsService,private _location:Location) { }

  ngOnInit(): void {
    this.studentAllGrade()
  }

  id:any
  studentAllGrade()
   {
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
  

     this._adminS.studentAllGrades(this.id).subscribe(res=>{
        this.dataSource = new MatTableDataSource<any>(res.gradesContainer);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
       console.log(res.assigments);
    console.log(res);
    
       
     })
    })
   }

  backClicked()
  {
    this._location.back()
  }

}
