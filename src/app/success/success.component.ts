import { Component, OnInit } from '@angular/core';
import {TransactionService} from './../services/transaction.service';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
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
  id:number ;
  tempid:number;
  
  constructor(private transservice: TransactionService) { }
  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getLast();
    })
    
  }
  getLast(){
    this.transservice.getLasttrans(this.tempid).subscribe((data:ITrans)=>{
      this.trans=data;
    })
  }
  ngOnInit(): void {
    this.sessionval= sessionStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    this.getuser();
  }

  

}
