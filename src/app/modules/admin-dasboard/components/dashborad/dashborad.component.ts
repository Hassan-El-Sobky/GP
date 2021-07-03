import { Component, OnInit } from '@angular/core';
import { AdminDashboradService } from '../../services/admin-dashborad.service'


@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})

export class DashboradComponent implements OnInit {

  data: any;
deta:any
  numOfSutudents: any;
  numOfInstructors: any;
  numOfCourse: any;
  numofPcourse: any;
  numofAvacourse: any;
  chartOptions: any;


  constructor(private _adminServices: AdminDashboradService) {



    this.getAllInstructors();
    this.getAllCourse();
    this.getAllStudents();
    this.getAllPCourses();
    this.getAllAvaCourses();

  }


  getAllInstructors() {
    this._adminServices.getAllInstructors().subscribe((data) => {
      this.numOfInstructors = data.numOfInstructors;
  
      this.barChar();
    });

  }
  getAllCourse() {
    this._adminServices.getAllcourses().subscribe((data) => {
      this.numOfCourse = data.numOfCourses;

     this.barChar();
    });

  }
  getAllStudents() {
    this._adminServices.getAllStudents().subscribe((data) => {
      this.numOfSutudents = data.numOfStudent;

      this.barChar();
    });

  }

  getAllPCourses() {
    this._adminServices.getAllPendingCourses().subscribe((data) => {
      console.log(data);
    
      this.numofPcourse =  data.numOfPendingCourses ;
      console.log(  this.numofPcourse );
      
      
      this.barChar();
    });

  }
  getAllAvaCourses() {
    this._adminServices.getAllAvalCourses().subscribe((data) => {
      console.log(data);
      
      this.numofAvacourse = data.numOfAvailableCourses;
      this.barChar();

    });

  }
  
  // 3 function get all information about the instructors,courses and students took only the count of each to fill the data of the chart 


  barChar() {
    this.data = {
      labels: ['Students', 'Courses', 'Instructors','pendingCourses','AvaliableCourses'],
      datasets: [{
        type: 'line',
        label: 'DataSet 1',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [this.numOfSutudents, this.numOfCourse, this.numOfInstructors,this.numofPcourse,  this.numofAvacourse]
      }, {
        type: 'bar',
        label: 'DataSet 2',
        backgroundColor: '#66BB6A',
        data: [this.numOfSutudents, this.numOfCourse, this.numOfInstructors,this.numofPcourse,  this.numofAvacourse],
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'DataSet 3 ',
        backgroundColor: '#FFA726',
        data: [ this.numOfSutudents, this.numOfCourse, this.numOfInstructors,this.numofPcourse,  this.numofAvacourse]
      }]
    };
    // this.chartOptions = {
    //   responsive: true,
    //   title: {
    //     display: true,
    //     text: 'Combo Bar Line Chart'
    //   },
    //   tooltips: {
    //     mode: 'index',
    //     intersect: true
    //   }
    // };

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
