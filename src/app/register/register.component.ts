import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForgotuser } from '../models/IForgotuserid';
import { Iusersaccount } from '../models/Iusersaccount';
import { UserdetailService } from '../services/userdetail.service';
import { UsersaccountService } from '../services/usersaccount.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 data:Iusersaccount={
  Account_Number:null,
  Customer_Id:null,
  Customername:'',
  Login_Password:'',
  Confirm_Login_Password:'',
  Transaction_Password:'',
  Confirm_Transaction_Password:'',
  Balance:null,
  Register_Internet_Banking:'',
  Login_Status:'',
  Logout_Time:null,
  Reference_Id:null,
  Otp:null
 }
 checkotp:IForgotuser={
  Account_Number:null,
  Customer_Id:null,
  Reference_Id:null,
  Mobile_Number:null,
  Email_Id:null
}
isTruee:boolean=false;
yesno:string="no";
OTP:number=null;
OtPauto:number=null;
 

  constructor(private registerservice:UsersaccountService,private detailservice:UserdetailService,private router:Router,private route:ActivatedRoute) { }

  verified()
  {
    this.OtPauto=Math.floor(Math.random() * 899999 + 100000);
    alert(this.OtPauto);
    alert(this.checkotp.Mobile_Number);
  }
  getbyAccountnumber(id:bigint){
    this.registerservice.getbyAccountnumber(id).subscribe((data:IForgotuser)=>
    {
      this.checkotp=data;
      this.getDetail();
    },
    error=>{alert(error.error.Message);}
      );}

  getDetail(){
    this.detailservice.getusernet(this.checkotp.Customer_Id).subscribe((data:string) => {
      this.yesno=data;
      this.checknet();
    }, error => { 
      alert(error.error.Message);});
  }
  
  checknet(){
    if(this.yesno=="YES"){
        this.isTruee=true;
        this.verified();
    }
    else if(this.yesno=="NO"){
      alert(this.checkotp.Customer_Id + " has not scubscribed for internet banking please subscribe to use the Netbanking facility");
      this.router.navigate(['/home']);
    }
  }

  RegisterDetail(value:number){
    if(this.OtPauto==value){
    this.registerservice.registerdetail(this.data).subscribe(
      ()=>{alert("Registered for Net Banking");
      this.router.navigate(['/login']);
    },
    error=>{alert(error.error.Message);}
    );}
    else{
      alert("OTP Doesnt Match-Enter correct OTP");
    }
  }
  

  saveRegister(data:Iusersaccount){
    this.data=data;
    this.getbyAccountnumber(this.data.Account_Number);
  }
  ngOnInit(): void {
  }

}
