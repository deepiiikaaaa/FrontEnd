import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForgotuser } from '../models/IForgotuserid';
import { IUser } from '../models/IUser';
import { Iusersaccount } from '../models/Iusersaccount';
import { UsersaccountService } from '../services/usersaccount.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
USERID:number=null;
OTP:number=null;
errormessage:string="";
data1:Iusersaccount={
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
data:IForgotuser={
  Account_Number:null,
  Customer_Id:null,
  Reference_Id:null,
  Mobile_Number:null,
  Email_Id:null,
  Otp:null
}
 OtPauto:number=null;
 lockstatus:string="";
 isTrue:boolean=false;

  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute) { }

  getbyCustId(id:number){
    this.registerservice.getbyCustId(id).subscribe((data:IForgotuser)=>
    {this.data=data;
      },
      error=>{alert(error.error.Message);});
      }
      Pass(value:number){
        if(this.data.Otp!=value)
        {this.errormessage="Enter the correct otp";this.router.navigate(['/forgotpassword/']);}
        if(this.data.Otp==value)
        {this.errormessage="";
         this.isTrue=true;
        }
    }
    generateotp(custid:number){
      this.registerservice.putotp_pass(custid).subscribe(()=>{alert("check your mail/mobile for otp");this.getbyCustId(this.USERID);},error=>{alert(error.error.Message);});   
    }
  userid(event){
    this.USERID=event.target.value;
    }
  Otp(event){
    this.OTP=event.target.value;
    }
    resetpassword(){
      this.generateotp(this.USERID);
      
    }
    unlocked(id:number){
      this.registerservice.deletelocked(id).subscribe((data:string)=>{this.lockstatus=data;alert(this.lockstatus)},
      error=>{alert(error.error.Message);});
    }
    setnewpassword(id:number){
      this.registerservice.setnewpassword(this.data1,id).subscribe(()=>{alert("Password Changed");
      this.unlocked(id);this.router.navigate(['/login']);}
      , error=>{alert(error.error.Message);});
    }
    saveRegister(data:Iusersaccount){
      this.data1=data;
      const id=+this.route.snapshot.paramMap.get('id')
      this.setnewpassword(Number(this.data.Account_Number));
    }
  ngOnInit(): void {
  }

}
