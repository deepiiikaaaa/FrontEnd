import { Component, OnInit } from '@angular/core';
import {UserdetailService} from './../services/userdetail.service'
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service'
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-benidash',
  templateUrl: './benidash.component.html',
  styleUrls: ['./benidash.component.css']
})
export class BenidashComponent implements OnInit {
  sessionval:string ="";
  id:number ;
  user:IUser={
    Account_Number : null,
    Customer_Id : null,
    Customername : null,
    Login_Password : null,
    Transaction_Password : null,
    Balance : null,
    Reference_Id: null,
    Otp: null,

  }
  isTrue:boolean=false;
  yesno:string="";
  constructor(private detailservice:UserdetailService ,private transservice: TransactionService,private router:Router) { }

  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.getDetail();
    },
    error=>{alert(error.error.Message);});
  }

  getDetail(){
    this.detailservice.getusernet(this.id).subscribe((data:string) => {
      this.yesno=data;
      this.checknet();
    },
    error=>{alert(error.error.Message);});
  }

  checknet(){
    if(this.yesno=="YES"){
        this.isTrue=true;
    }
    else{
      alert(this.id + "has not scubscribed for internet banking please subscribe to use the transaction facility");
      this.router.navigate(['/dashboard']);
    }
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
}
  }

}