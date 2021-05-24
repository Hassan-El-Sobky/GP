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
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'Action'];
  dataSource = ELEMENT_DATA;
 
  constructor() { }

  ngOnInit(): void {
  }

}
