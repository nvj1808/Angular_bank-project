import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your perfect banking partner"
  inputplaceholder="Account number"

  acno=''
psw=''
userDetails: any={
  1000:{acno:1000,username:"nikhil",password:"abc123",balance:0},
  1001:{acno:1001,username:"aswin",password:"abc123",balance:0},
  1002:{acno:1002,username:"prabijith",password:"abc123",balance:0},
  1003:{acno:1003,username:"Nishanth",password:"abc123",balance:0}
}


  constructor(){ }
ngOnInit(): void {
  
}
login(){
  // alert('login clicked')
  var acnum=this.acno
  var psw=this.psw
  var userDetails=this.userDetails
  if(acnum in userDetails)
  if(psw==userDetails[acnum]["password"]){
    alert("login success")
  }
  else{
    alert("incurrect password")
  }
  else{
    alert("acno incurrect or not registered yet")
  }
  
}

acnoChange(event:any){
 this.acno=event.target.value
  
}
pswrdChange(event:any){
this.psw=event.target.value
// console.log(this.psw);

}
}
