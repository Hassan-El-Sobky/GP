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
  chartOptions: any;


  constructor(private _adminServices: AdminDashboradService) {



    this.getAllInstructors();
    this.getAllCourse();
    this.getAllStudents();
  }


  getAllInstructors() {
    this._adminServices.getAllInstructors().subscribe((data) => {
      this.numOfInstructors = data.numOfInstructors;
      this.charts();
      this.barChar();
    });

  }
  getAllCourse() {
    this._adminServices.getAllcourses().subscribe((data) => {
      this.numOfCourse = data.numOfCourses;
      this.charts();
     this.barChar();
    });

  }
  getAllStudents() {
    this._adminServices.getAllStudents().subscribe((data) => {
      this.numOfSutudents = data.numOfStudent;
      this.charts();
      this.barChar();
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
  barChar() {
    this.data = {
      labels: ['Students', 'Courses', 'Instructors'],
      datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [this.numOfSutudents, this.numOfCourse, this.numOfInstructors]
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [this.numOfSutudents, this.numOfCourse, this.numOfInstructors],
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [ this.numOfSutudents, this.numOfCourse, this.numOfInstructors]
      }]
    };
    this.chartOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Combo Bar Line Chart'
      },
      tooltips: {
        mode: 'index',
        intersect: true
      }
    };

    // this.config = this.configService.config;
    // this.updateChartOptions();
    // this.subscription = this.configService.configUpdate$.subscribe(config => {
    //   this.config = config;
    //   this.updateChartOptions();
    // });
  }

  // updateChartOptions() {
  //   if (this.config.dark)
  //     this.applyDarkTheme();
  //   else
  //     this.applyLightTheme();
  // }

  

  ngOnInit(): void {
  }

}
