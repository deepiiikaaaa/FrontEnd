import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
sample:any[];
  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute) { }

  getbyCustId(id:number){
    //console.log(id);
    // if(this.OTP!=this.data.Otp){this.errormessage="Enter the correct otp";}if(this.OTP=this.data.Otp){this.errormessage="";this.router.navigate(['/setnewpassword/'+this.data.Account_Number])})

    this.registerservice.getbyCustId(id).subscribe((data:Iusersaccount)=>
    {  
      this.data=data;
      if(this.OTP!=this.data.Otp)
      {this.errormessage="Enter the correct otp";}
      if(this.OTP==this.data.Otp)
      {this.errormessage="";this.router.navigate(['/setnewpassword/'+this.data.Account_Number])}});
      }
  userid(event){
    this.USERID=event.target.value;
    }
  Otp(event){
    this.OTP=event.target.value;
    }
    resetpassword(){
      
      this.getbyCustId(this.USERID);
    }

  ngOnInit(): void {
  }

}
