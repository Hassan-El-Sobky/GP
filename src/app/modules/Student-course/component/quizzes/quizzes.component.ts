import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
 
  Action: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', Action: 'solve', },
  { name: 'Helium',  Action: 'solve', },

];
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
