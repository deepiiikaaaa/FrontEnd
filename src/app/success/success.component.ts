import { Component, OnInit } from '@angular/core';
import {TransactionService} from './../services/transaction.service';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  trans:ITrans={ Transaction_Id:null, From_Account_Number:null, Amount:null, To_Account_Number:null, 
    Mode: null, Maturity_Instructions:null, Remark:null, Transaction_Date:null};
  user:IUser;
  sessionval:string ="";
  sessionval2:string="";
  id:number ;
  tempid:number;
  
  constructor(private transservice: TransactionService,private router:Router) { }
  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getLast();
    },
    error=>{alert(error.error.Message);});
    
  }
  getLast(){
    this.transservice.getLasttrans(this.tempid).subscribe((data:ITrans)=>{
      this.trans=data;
      localStorage.removeItem("transid");
    },
    error=>{alert(error.error.Message);});
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
    
    this.sessionval2=localStorage.getItem("transid");
    if(this.sessionval2==null)
    {
      alert("transaction expired");
      this.router.navigate(['/transverify']);
    }
  }
  }

  

}
