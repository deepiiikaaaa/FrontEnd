import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'

@Component({
  selector: 'app-translis',
  templateUrl: './translis.component.html',
  styleUrls: ['./translis.component.css']
})
export class TranslisComponent implements OnInit {
  transli:ITrans[];
  trans:ITrans;
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;

  constructor(private transservice: TransactionService,private router:Router) {  }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.gettrans();
    })
  }

  gettrans(){
    this.transservice.gettrans(this.tempid).subscribe((data:ITrans[]) => {
      console.log(data);
      this.transli = data;
    })
  }

  ngOnInit(): void {
    this.sessionval= sessionStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    this.getuser();
  }


}
