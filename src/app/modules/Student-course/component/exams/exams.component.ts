import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

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
 
  constructor(private _location: Location) { }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
