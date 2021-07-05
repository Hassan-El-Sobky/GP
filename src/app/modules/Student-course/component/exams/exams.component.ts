import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { StudentCoursesService } from '../../services/student-courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

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
courseId:any
courseExams:any
examId:any
flag:boolean=false;
totalLength: any;
page: number = 1;
  constructor(private _location: Location,
    private _activated:ActivatedRoute,
    private _studS:StudentCoursesService,
    private route:Router
    
    ) { }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.getId();
  }

  getId(){
    this._activated.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
       this.getExams()
    });
  }


  getExams() {
    this._studS.getExamsById(this.courseId,localStorage.getItem('username')).subscribe(res=>{
      console.log(res);
       this.courseExams=res.exams;
       this.totalLength=res.exams.length
    })
   }

   public webcamImage: any = null;
   private trigger: Subject<void> = new Subject<void>();
   triggerSnapshot(): void {
    this.trigger.next();
   }
   handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
     // console.log(webcamImage.imageAsDataUrl);
    
   var img = webcamImage.imageAsDataUrl;
 
  
   console.log(webcamImage.imageAsBase64);
   
 
  const data=`photo=${webcamImage.imageAsDataUrl}`
 
  
   // this._testSt.getFaceDetection(webcamImage.imageAsDataUrl,data).subscribe(res=>{
   //   console.log(res);
      
   //  })
   var ImageURL =webcamImage.imageAsDataUrl; // 'photo' is your base64 image
 // Split the base64 string in data and contentType
 console.log(ImageURL);
 
 var block = ImageURL.split(";");
 // Get the content type of the image
 var contentType = block[0].split(":")[1];// In this case "image/gif"
 // get the real base64 content of the file
 var realData = block[1].split(",")[1];
 
 // Convert it to a blob to upload
 var blob =this.b64toBlob(realData, contentType);
 
 // Create a FormData and append the file with "image" as parameter name
 var formDataToUpload = new FormData();
 formDataToUpload.append("photo", blob);
 formDataToUpload.append("name","hassaaan")
 
//  this._studS.besmallah(formDataToUpload).subscribe(res=>{
//    console.log(res);
//     if(res.status=="success")
//     {
//       localStorage.setItem("faceId",res.id);
//       this.route.navigate(['student','examquestion',this.examId])
//     }
   
 
//  })
this.route.navigate(['student','examquestion',this.examId])
//  this._testSt.faceVerifed(219446,formDataToUpload).subscribe(res=>{
//    console.log(res);
   
//  })
   }
 
 
   b64toBlob(b64Data:any, contentType:any, sliceSize?:any) {
     contentType = contentType || '';
     sliceSize = sliceSize || 512;
 
     var byteCharacters = atob(b64Data); // window.atob(b64Data)
     var byteArrays = [];
 
     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         var slice = byteCharacters.slice(offset, offset + sliceSize);
 
         var byteNumbers = new Array(slice.length);
         for (var i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
 
         var byteArray = new Uint8Array(byteNumbers);
 
         byteArrays.push(byteArray);
     }
 
     var blob = new Blob(byteArrays, {type: contentType});
     return blob;
 }
 
   
   public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
   }
   show(id:any) {
     this.flag=!this.flag;
     this.examId=id
   
   
   }

}
