import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import {BenificiaryServiceService} from './../services/benificiary-service.service';

@Component({
  selector: 'app-translis',
  templateUrl: './translis.component.html',
  styleUrls: ['./translis.component.css']
})
export class TranslisComponent implements OnInit {
  transli:ITrans[];
  numb:number=0;
  benili:IBeni[];
  index:number=1;
  trans:ITrans;
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;

  constructor(private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) {  }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.gettrans();
      this.getbeni();
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
  gettrans(){
    this.transservice.gettrans(this.tempid).subscribe((data:ITrans[]) => {
      console.log(data);
      this.transli = data;
    })
  }

  getbeni(){
    this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
      console.log(data);
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