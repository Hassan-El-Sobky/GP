import { Component, OnInit } from '@angular/core';
import { AdminDashboradService } from '../../services/admin-dashborad.service'


@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {

  data: any;
  numOfSutudents: any;
  numOfInstructors: any;
  numOfCourse: any;

  constructor(private _adminServices: AdminDashboradService) {



    this.getAllInstructors();
    this.getAllCourse();
    this.getAllStudents();
  }


  getAllInstructors() {
    this._adminServices.getAllInstructors().subscribe((data) => {
      this.numOfInstructors = data.numOfInstructors;
      this.charts();
    });

  }
  getAllCourse() {
    this._adminServices.getAllcourses().subscribe((data) => {
      this.numOfCourse = data.numOfCourses;
      this.charts();
    });

  }
  getAllStudents() {
    this._adminServices.getAllStudents().subscribe((data) => {
      this.numOfSutudents = data.numOfStudent;
      this.charts();
    });

  }
  // 3 function get all information about the instructors,courses and students took only the count of each to fill the data of the chart 

  charts() {
    this.data = {
      labels: ['Students', 'Courses', 'Instructors'],
      datasets: [
        {
          data: [this.numOfSutudents, this.numOfCourse, this.numOfInstructors],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit(): void {
  }

}
