import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import {BenificiaryServiceService} from './../services/benificiary-service.service';

@Component({
  selector: 'app-transdate',
  templateUrl: './transdate.component.html',
  styleUrls: ['./transdate.component.css']
})
export class TransdateComponent implements OnInit {
  transli:ITrans[];
  benili:IBeni[];
  trans:ITrans;
  user:IUser;
  sessionval:string ="";
  id:number ;
  index:number=1;
  numb:number=0;
  tempid:number;
start:Date;
finish:Date;
together:string="";
isTrue:boolean=false;



constructor(private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) {  }

getuser(){
  this.transservice.getuser(this.id).subscribe((data:IUser) =>{
    this.user = data;
    this.tempid = this.user.Account_Number;
  })
}

getbeni(){
  this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
    console.log(data);
    this.benili = data;
  })
}

gettrans(){
  this.transservice.gettransdate(this.together).subscribe((data:ITrans[]) => {
    this.transli = data;
  })
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
    this.getuser();
  }


}