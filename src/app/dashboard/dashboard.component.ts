import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sessionval:string ="";
  id:number ;
  user:IUser;
  constructor(private transservice: TransactionService,private router:Router) { }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
    })
  }

  ngOnInit(): void {
    this.sessionval= sessionStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    this.getuser();
  }

}
