import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Iuserdetail } from '../models/Iuserdetail';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import {UserdetailService} from './../services/userdetail.service'
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionval:string ="";
  id:number ;
  user:IUser;
  isTrue:boolean=false;
  yesno:string="";
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
  }
  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    console.log(this.sessionval);
    
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }

    this.id = parseInt(this.sessionval);
    this.getuser();
  }

}
