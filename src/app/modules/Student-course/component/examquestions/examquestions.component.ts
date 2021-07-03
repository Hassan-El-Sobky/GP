import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { StudentCoursesService } from '../../services/student-courses.service';

@Component({
  selector: 'app-examquestions',
  templateUrl: './examquestions.component.html',
  styleUrls: ['./examquestions.component.scss']
})
export class ExamquestionsComponent implements OnInit {
examId:any
quizzes:any
correctAnswer=0;
incorrectAnswer=0;
currentQuestion=0;
Question:boolean=true
lastQuestion:boolean=false
flag:boolean=false;
  constructor(private _studS:StudentCoursesService,private _activated:ActivatedRoute,
    private router:Router
    ) {
     
    this.getId();

    setInterval(()=>{
      this.flag=true
    },30000)
   }
   
  getId(){
    this._activated.paramMap.subscribe(params => {
      this.examId = params.get('id');
      console.log(this.examId);
       this.getExam()
    });
  }

  getExam(){
    this._studS.getSpecificExam(this.examId).subscribe(res=>{
      console.log(res.assesment.questions);
       this.quizzes=res.assesment.questions
       console.log(this.quizzes);
       
    })
  }
  onAnswers(correct:any)
  { 
    if(this.currentQuestion == this.quizzes.length-1){
  
      this.Question=false;
      this.lastQuestion=true
   
    console.log(this.currentQuestion);
    
    } else {
      this.currentQuestion++;
      console.log(this.currentQuestion);
    }
      console.log(correct);
      
    if(correct)
    {
      this.correctAnswer++;
    } else
    {
      this.incorrectAnswer++;
    }
  }

  ngOnInit(): void {
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
// formDataToUpload.append("name","hassaaan")

//  this._studS.besmallah(formDataToUpload).subscribe(res=>{
//    console.log(res);
//     if(res.status=="success")
//     {
//       localStorage.setItem("faceId",res.id);
//       this.route.navigate(['student','examquestion',this.examId])
//     }
  

//  })
this.flag=false;
let faceId=localStorage.getItem("faceId");

 this._studS.faceVerifed(faceId,formDataToUpload).subscribe(res=>{
    console.log(res);
   if(res.status!="success")
   {
    this.router.navigate(['courses','Home'])
   }
 })
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

  

}
