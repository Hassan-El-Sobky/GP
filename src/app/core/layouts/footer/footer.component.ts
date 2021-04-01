import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';


import * as firebase from 'firebase';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  chatToggle: boolean = false;
  chatToggle0 = false;
  x:any;
  chatToggle1 = true;
  chatToggle2 = false;
  messagesList: any;
  usersList=[];
  messages : any;
  isLoadingResults: boolean;
  rooms: any;
  casting=[];
  usersChat=[]

  key=[];
  savedReplies: any=[];
  keyword='';
  close:boolean=true;
  constructor(private chatService: ChatService , private db: AngularFireDatabase) { }

  ngOnInit() {
    
    
    this.chatService.getMessagesList().subscribe(res=>{
   
      this.messagesList= res;
      //console.log(this.messagesList);
         for(let i=0;i<2;i++){
        
          this.casting.push(Object.values(this.messagesList[i]))
      }

      
        console.log(this.casting);
        
    })

 

   this.getusersChat()
   this.getReplies();
  }
/*
  getChat()
  {
    firebase.database().ref('messages/sharm').on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
     console.log(this.rooms)

     
     this.rooms.forEach( (element) => {
    
      
       this.key.push(element.key);
      console.log(this.key);
        
        
      });
      this.isLoadingResults = false;
      
      for(let i=0;i<this.rooms.length;i++){
        
      this.casting.push(Object.values(this.rooms[i]))
      console.log(Object.values(this.rooms[i]));
      
      }
  
      console.log(this.casting);
 


    });

  
  }
*/

  chatTogg(index,event){

if(event.target)
{

  
  this.x=index

    this.chatToggle0=true
  this.chatToggle1=!this.chatToggle1;

  
  
}

  }
  

sendmessage(message,chat)
{
   console.log(chat);
   let id =chat[0].userId+"_"+chat[0].adminId;
  //let id =chat[chat.length-1];
  let Message={
    
   "adminId":chat[0].adminId,
    "messageType" : "text",
    "seen" : "false",
    "senderType" : "ADMIN",
    "text" : message,
    "time" :new Date().getUTCDate(),
     "userId":chat[0].userId
 }

   this.casting.splice(0,this.casting.length)
 
 this.chatService.createMessage(Message,id);
  
    
  }

adminStatus(chat,bool)
{  let id=chat[0].userId;
  if(bool){

  let status={
    is_Typing:"true",
    online:"true"
  }
 this.chatService.updateStatus(id,status)
}
else{

  let status={
    is_Typing:"false",
    online:"false"
  }
 this.chatService.updateStatus(id,status)
}



}

newArr=[];
 arr:any=[];
 status;
 notifaction:string='assets/notification.mp3'
onlineStatus(chat)
{
  let id =chat[chat.length-1];
  this.status= chat[chat.length-2].seen;
  if(this.status=="false")
  {
    this.status="Deliverd"
    const audio=new Audio(this.notifaction);
    audio.play();
  }
  else{
    this.status="seen"
  }
console.log(this.status);




  
  // this.chatService.updateSeen(id,{ "seen" : "true"})  
/*
   this.chatService.getById(id).subscribe(res=>{
    this.arr=res;
    console.log(this.arr);

    let flag="true";
     this.newArr.push(Object.values(this.arr));
     console.log(this.newArr);

     for(let i=0;i<this.newArr.length;i++)

         {
            console.log(this.newArr[i].length);
            
           for(let j=0;j<this.newArr[i].length;j++)
           {
         //   this.newArr[i][j].seen="aaaaa"
            console.log( this.newArr[i][j].seen);
            
           }

           
         }
           //  console.log(this.newArr);
             
      
     firebase.database().ref().child('messages/sharm/' + id)
.update({ seen: "true"});
   })
    firebase.database().ref('messages/sharm/' + id).orderByChild('seen').equalTo(this.roomname).on('value', (resp2: any) => {
  const roomusers = snapshotToArray(resp2);
  this.users = roomusers.filter(x => x.status === 'online');
});
  */





}
statusFlag=false
seeStatus()
{
 this.statusFlag=!this.statusFlag;
}


/*
 sendMessage(key)
 {
   let Message={
    
   
      "messageType" : "text",
      "seen" : "true",
      "senderType" : "ADMIN",
      "text" : "Hello ?!!",
      "time" : 1611149403966,
   
    
   }
      this.chatService.createMessage(Message,key);
 }
*/



getusersChat()
{
  this.chatService.getUsersChat(1).subscribe(res=>{
    this.usersChat=res.data;

  });
}



getReplies() {
  this.chatService.getReplies(this.keyword).subscribe(res => {
    console.log(res.data);
    this.savedReplies = res.data
  })
}
replyFlag:boolean=false;
MessageFlag:boolean=false;
repliesFlag:boolean=false;
updateFlag :boolean =false;
toggleReply()
{
 this.replyFlag=!this.replyFlag
 this.repliesFlag=true

}

createToggle()
{
  this.MessageFlag=!this.MessageFlag;
  this.repliesFlag=false;
 
}


sendData(form: NgForm) {
  let data = {
    title: form.value.title,
    reply: form.value.reply
  }
  this.chatService.createReply(data).subscribe(res => {
    console.log(res);
  })
  form.reset()
  this.MessageFlag = false;
  this.repliesFlag = true;
  this.getReplies()
}
dReply(id) {
  console.log(id);
  this.chatService.deleteReply(id).subscribe(res => {
    console.log(res);
  })
  this.getReplies()
}

editData;
edit(id) {
  this.updateFlag = true
  this.repliesFlag=false
  this.chatService.getReplyById(id).subscribe(res => {
    this.editData = res.data
    console.log(this.editData);
  })
}

updateData(form: NgForm, id) {
  let data = {
    title: form.value.title,
    reply: form.value.reply
  }
  console.log(form.value.title + id);
  this.chatService.editReply(id, data).subscribe(res => {
    console.log(res);
    this.updateFlag = false;
    this.repliesFlag=true;
  
  })
  this.getReplies()
}
closeEdit() {
  this.updateFlag = false;
  this.repliesFlag=true;

}
savedReplyValue :string = "";
CopySavedReply(savedReply){
  this.savedReplyValue = savedReply;
  
}

serachReply(keyword)
{
  this.chatService.getReplies(keyword).subscribe(res => {
    console.log(res.data);
    this.savedReplies = res.data
  })
}

closed()
{
  this.close=false;
this.chatToggle0=false
 
}
min()
{
 
  this.chatToggle0=!this.chatToggle0
  
}

}
export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};


