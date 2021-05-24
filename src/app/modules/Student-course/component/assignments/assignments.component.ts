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
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
displayedColumns: string[] = [ 'name', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
