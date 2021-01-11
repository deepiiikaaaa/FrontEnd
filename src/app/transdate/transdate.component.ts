import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'

@Component({
  selector: 'app-transdate',
  templateUrl: './transdate.component.html',
  styleUrls: ['./transdate.component.css']
})
export class TransdateComponent implements OnInit {
  transli:ITrans[];
  trans:ITrans;
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;
start:Date;
finish:Date;
together:string="";
isTrue:boolean=false;



constructor(private transservice: TransactionService,private router:Router) {  }

getuser(){
  this.transservice.getuser(this.id).subscribe((data:IUser) =>{
    this.user = data;
    this.tempid = this.user.Account_Number;
  })
}

gettrans(){
  this.transservice.gettransdate(this.together).subscribe((data:ITrans[]) => {
    this.transli = data;
  })
}

  save(){
    this.isTrue=true;
    this.together=this.tempid+','+this.start.toString()+','+this.finish.toString();
    this.gettrans();
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired");
      this.router.navigate(['/login']);
    }
    this.getuser();
  }


}
