import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import {BenificiaryServiceService} from './../services/benificiary-service.service';
import {UserdetailService} from './../services/userdetail.service'

@Component({
  selector: 'app-transdate',
  templateUrl: './transdate.component.html',
  styleUrls: ['./transdate.component.css']
})
export class TransdateComponent implements OnInit {
  transli:ITrans[];
  benili:IBeni[];
  trans:ITrans;
  isTruee:boolean=false;
  yesno:string="no";
  user:IUser={
    Account_Number : null,
    Customer_Id : null,
    Customername : null,
    Login_Password : null,
    Transaction_Password : null,
    Balance : null,
    Register_Internet_Banking : null,
    Login_Status : null,
    Logout_Time : null,
    Reference_Id: null,
    Otp: null,

  }
  sessionval:string ="";
  id:number ;
  index:number=1;
  numb:number=0;
  tempid:number;
start:Date;
finish:Date;
together:string="";
isTrue:boolean=false;



constructor(private detailservice:UserdetailService ,private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) {  }

getuser(){
  this.transservice.getuser(this.id).subscribe((data:IUser) =>{
    this.user = data;
    this.tempid = this.user.Account_Number;
    this.getDetail();
  }, error => { 
    alert(error.error.Message);});
}

getDetail(){
  this.detailservice.getusernet(this.id).subscribe((data:string) => {
    this.yesno=data;
    this.checknet();
  }, error => { 
    alert(error.error.Message);});
}

checknet(){
  if(this.yesno=="YES"){
      this.isTruee=true;
      this.getbeni();
  }
  else if(this.yesno=="NO"){
    alert(this.id + "has not scubscribed for internet banking please subscribe to use the transaction facility");
    this.router.navigate(['/dashboard']);
  }
}


getbeni(){
  this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
    this.benili = data;
  }, error => { 
    alert(error.error.Message);});
}

gettrans(){
  this.transservice.gettransdate(this.together).subscribe((data:ITrans[]) => {
    this.transli = data;
  }, error => { 
    alert(error.error.Message);});
}

check(bname:string,tname:string){
  if(bname==tname && this.numb<1){
    this.numb++;
    return true;
  }
  else{
    return false;
  }
}

back(){
  this.numb=0;
}

  save(){
    this.isTrue=true;
    this.together=this.tempid+','+this.start.toString()+','+this.finish.toString();
    this.getbeni();
    this.gettrans();
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }
    else{
    this.getuser();
    }
  }


}