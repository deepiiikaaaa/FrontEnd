import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {BenificiaryServiceService} from './../services/benificiary-service.service';
import {UserdetailService} from './../services/userdetail.service'

@Component({
  selector: 'app-benificiary',
  templateUrl: './benificiary.component.html',
  styleUrls: ['./benificiary.component.css']
})
export class BenificiaryComponent implements OnInit {
  benili:IBeni[];
  beni:IBeni;
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
  id:number ;
  tempid:number;
  isTrue:boolean=false;
  yesno:string="no";
  constructor(private detailservice:UserdetailService ,private benifiservice: BenificiaryServiceService,private router:Router) {  }


  getuser(){
    this.benifiservice.getuser(this.id).subscribe((data:IUser) =>{
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