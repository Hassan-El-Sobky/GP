import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminCoursesService } from '../../services/admin-courses.service';
import { Location } from '@angular/common';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cCode', 'prerequisite', 'courseDepartment', 'status', 'state', 'action', 'view-detials'];

  defaultImage: string = '/assets/images/default image.png';
  dataSource: any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private _allCourses: AdminCoursesService, public dialog: MatDialog, private _location: Location) {
    // this.dataSource = new MatTableDataSource<any>();
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.getAllCourses()



  }
  backClicked() {
    this._location.back();
  }


  getAllCourses() {
    this._allCourses.getAllCourses().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res.allCourses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res.allCourses);

    })
  }
  courseAccepted(id: any) {

    console.log(id);
    let token = localStorage.getItem('accessToken');
    console.log(token);
    let data =
    {
      token: token,
      state: "available"
    }
    this._allCourses.udpatedState(id, data).subscribe(res => {
      console.log(res);

    })

  }

  openDialog(id: any) {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      data: { i: id },
      height: '180px',
      width: '250px',   
    });

    dialogRef.afterClosed().subscribe(result => {

      setTimeout(() => {
        this._allCourses.getAllCourses().subscribe(res => {
          this.dataSource = new MatTableDataSource<any>(res.allCourses);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res.allCourses);
    
        })
      }, 500);
    });

  }
  ngOnInit(): void {
  }

  courseSearch(name: any) {

    this._allCourses.courseSearch(name).subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res.searchResult);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
      
    })

  }

}
