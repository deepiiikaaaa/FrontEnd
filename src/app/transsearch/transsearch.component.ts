import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import {BenificiaryServiceService} from './../services/benificiary-service.service';
import {UserdetailService} from './../services/userdetail.service'

@Component({
  selector: 'app-transsearch',
  templateUrl: './transsearch.component.html',
  styleUrls: ['./transsearch.component.css']
})
export class TranssearchComponent implements OnInit {
  transli:ITrans[];
  numb:number=0;
  benili:IBeni[];
  index:number=1;
  trans:ITrans;
  user:IUser={
    Account_Number : null,
    Customer_Id : null,
    Customername : null,
    Login_Password : null,
    Transaction_Password : null,
    Balance : null,
    Reference_Id: null,
    Otp: null,

  }
  sessionval:string ="";
  isTruee:boolean=false;
  start:number;
  isTrue:boolean=false;
  yesno:string="no";
  id:number ;
  tempid:number;

  constructor(private detailservice:UserdetailService ,private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) {  }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getDetail();
    })
  }

  getDetail(){
    this.detailservice.getusernet(this.id).subscribe((data:string) => {
      this.yesno=data;
      this.checknet();
    })
  }

  checknet(){
    if(this.yesno=="YES"){
        this.isTrue=true;
        this.gettrans();
        this.getbeni();
    }
    else if(this.yesno=="NO"){
      alert(this.id + "has not scubscribed for internet banking please subscribe to use the transaction facility");
      this.router.navigate(['/dashboard']);
    }
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

  save(){
    this.isTruee=true;
  }

  back(){
    this.numb=0;
  }
  gettrans(){
    this.transservice.gettrans(this.tempid).subscribe((data:ITrans[]) => {
      this.transli = data;
    })
  }

  getbeni(){
    this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
      this.benili = data;
    })
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