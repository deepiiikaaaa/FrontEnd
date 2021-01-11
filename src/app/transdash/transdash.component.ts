import { Component, OnInit } from '@angular/core';
import {UserdetailService} from './../services/userdetail.service'
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-transdash',
  templateUrl: './transdash.component.html',
  styleUrls: ['./transdash.component.css']
})
export class TransdashComponent implements OnInit {
  sessionval:string ="";
  id:number ;
  user:IUser;
  isTrue:boolean=false;
  yesno:string="no";
  constructor(private detailservice:UserdetailService ,private transservice: TransactionService,private router:Router) { }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
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
    }
    else if(this.yesno=="NO"){
      alert(this.id + "has not scubscribed for internet banking please subscribe to use the transaction facility");
      this.router.navigate(['/dashboard']);
    }
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