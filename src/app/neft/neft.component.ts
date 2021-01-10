import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service';
import {BenificiaryServiceService} from './../services/benificiary-service.service';
import { IBeni } from '../models/IBenificiary';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {
  trans:ITrans={ Transaction_Id:null, From_Account_Number:null, Amount:null, To_Account_Number:null, 
    Mode: null, Maturity_Instructions:null, Remark:null, Transaction_Date:null};
    benili:IBeni[];
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;
  accno:number;
  refid:number;
  constructor(private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) { }
  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getbeni();
    })
  }

  getbeni(){
    this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
      console.log(data);
      this.benili = data;
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
    this.trans.Mode="NEFT";
    this.addtrans();
  }


  ngOnInit(): void {
    this.sessionval= sessionStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    this.getuser();
  }


}
