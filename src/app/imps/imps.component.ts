import { Component, OnInit } from '@angular/core';
import { ITrans } from '../models/ITrans';
import {UserdetailService} from './../services/userdetail.service'
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {TransactionService} from './../services/transaction.service';
import {BenificiaryServiceService} from './../services/benificiary-service.service';
import { IBeni } from '../models/IBenificiary';
import {LoginServiceService} from './../services/login-service.service';    
import { FormsModule } from '@angular/forms';  
import { ILog } from '../models/ILogin';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {
  trans:ITrans={ Transaction_Id:null, From_Account_Number:null, Amount:null, To_Account_Number:null, 
    Mode: null, Maturity_Instructions:null, Remark:null, Transaction_Date:null};
    benili:IBeni[];
    model : ILog = { CustomerID : null, Password : null};
    user:IUser={
      Account_Number : null,
      Customer_Id : null,
      Customername : null,
      Login_Password : null,
      Transaction_Password : null,
      Balance : null,
      Register_Internet_Banking : null,
      Login_Status : null,
      Logout_Time : null,
      Reference_Id: null,
      Otp: null,
  
    }
  sessionval:string ="";
  sessionval2:string="";
  id:number ;
  tempid:number;
  isTrue:boolean=false;
  yesno:string="no";
  accno:number;
  refid:number;
  password:string="";
  constructor(private detailservice:UserdetailService ,private LoginService:LoginServiceService,private benifiservice: BenificiaryServiceService,private transservice: TransactionService,private router:Router) { }
  getuser(){
    this.transservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getDetail();
    }, error => { 
      alert(error.error.Message);});
  }
  
  getDetail(){
    this.detailservice.getusernet(this.id).subscribe((data:string) => {
      this.yesno=data;
      this.checknet();
    }, error => { 
      alert(error.error.Message);});
  }

  checknet(){
    if(this.yesno=="YES"){
        this.isTrue=true;
        this.getbeni();
    }
    else if(this.yesno=="NO"){
      alert(this.id + "has not scubscribed for internet banking please subscribe to use the transaction facility");
      this.router.navigate(['/dashboard']);
    }
  }

  getbeni(){
    this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
      this.benili = data;
    }, error => { 
      alert(error.error.Message);});
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
  login(){
    this.LoginService.trans(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+" can proceed in for transaction ");
        this.addtrans();
      }, error => { 
        alert(error.error.Message);
        this.router.navigate(['/transverify']);
        localStorage.removeItem("transid");
    }
    );
  }

  savebeni(tran:ITrans){
    this.trans=tran;
    this.trans.Mode="IMPS";
    this.model.CustomerID=this.id;
    this.model.Password=this.password;
    this.login();
  }
  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired")+localStorage.getItem("logouttime");
      this.router.navigate(['/login']);
    }
    else{
    this.getuser();
    
    this.sessionval2=localStorage.getItem("transid");
    if(this.sessionval2==null)
    {
      alert("transaction expired");
      this.router.navigate(['/transverify']);
    }
  }
  }
  

}