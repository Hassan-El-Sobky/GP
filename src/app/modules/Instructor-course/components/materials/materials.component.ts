import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstAddCourseService } from '../../services/inst-add-course.service';


export interface PeriodicElement {
  name: string;
 
  Action: string;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', Action: 'solve', },
  { name: 'Helium',  Action: 'solve', },

];

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'Action'];
  dataSource = ELEMENT_DATA;
  id:any
  constructor(private _activated:ActivatedRoute,private _instServ:InstAddCourseService) { }

  ngOnInit(): void {
  }
  
  getCourse()
  {
   
    this._activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);  
      this._instServ.specificCourse(this.id).subscribe(res=>{
        console.log(res);
        
      })
    })
  }

  defaultImage: any = '/assets/images/squared.jpg';
  fileName = '';
   d= Date.now
  selectFile(event:any)
  {
    const file:File = event.target.files[0];
    if (file) {

      this.fileName = file.name;

      const formData = new FormData();
 
      
      formData.append("title","test");
      formData.append("uploadDate",`${this.d}`);
      formData.append("description","aaaaaaaa");
      formData.append("courseCode","L122");
      formData.append("lectureCode","L111");
      formData.append("token",`${localStorage.getItem('accessToken')}`);
      formData.append("username",`${localStorage.getItem('username')}`);
      formData.append("lectureFile", file);
     this._instServ.lecUpload(formData).subscribe(res=>{
          console.log(res);
          
        })

  }
          
      //  const data={title:"test" , uploadDate:Date.now() , description:"Hiii" 
      //  , courseCode:"L122", lectureCode:"1" , token:localStorage.getItem('accessToken') ,username:localStorage.getItem('username'),
      //   lectureFile:x}
      //   this._instServ.lecUpload(data).subscribe(res=>{
      //     console.log(res);
          
      //   })
     
  }


}
