import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service';
@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {
  trans:ITrans={ Transaction_Id:null, From_Account_Number:null, Amount:null, To_Account_Number:null, 
    Mode: null, Maturity_Instructions:null, Remark:null, Transaction_Date:null};
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;
  accno:number;
  refid:number;
  constructor(private transservice: TransactionService,private router:Router) { }
  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
    })
  }

  addtrans(){
    this.transservice.addbeni(this.tempid,this.trans).subscribe(
      ()=> {
          alert("transaction successful");
          this.router.navigate(['/succ']);
    },error => { 
      alert(error.error.Message);
    }
    );
  }

  savebeni(tran:ITrans){
    this.trans=tran;
    this.trans.Mode="RTGS";
    this.addtrans();
  }

  ngOnInit(): void {
    this.sessionval= sessionStorage.getItem("adId");
    this.id = parseInt(this.sessionval);
    this.getuser();
  }
  

 
}
