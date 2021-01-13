import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForgotuser } from '../models/IForgotuserid';
import { Iusersaccount } from '../models/Iusersaccount';
import { UsersaccountService } from '../services/usersaccount.service';

@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {
AccountNumber:bigint=null;
errormessage:string="";
  OTP:number=null;
  // data:Iusersaccount={
  //   Account_Number:null,
  //   Customer_Id:null,
  //   Customername:'',
  //   Login_Password:'',
  //   Confirm_Login_Password:'',
  //   Transaction_Password:'',
  //   Confirm_Transaction_Password:'',
  //   Balance:null,
  //   Register_Internet_Banking:'',
  //   Login_Status:'',
  //   Logout_Time:null,
  //   Reference_Id:null,
  //   Otp:null
  //  }
  data:IForgotuser={
    Account_Number:null,
    Customer_Id:null,
    Reference_Id:null,
    Mobile_Number:null,
    Email_Id:null,
    Otp:null
  }

OtPauto:number=null;


  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute ) { }

  getbyAccountnumber(id:bigint){
    //console.log(id);
    this.registerservice.getbyAccountnumber(id).subscribe((data:IForgotuser)=>
    {this.data=data;
      },
      error=>{alert(error.error.Message);});
    }
      generateotp(accno:bigint){
        this.registerservice.putotp_id(accno).subscribe(()=>{alert("check your mail/mobile for otp");this.getbyAccountnumber(this.AccountNumber);},error=>{alert(error.error.Message);});   
      }
      generateuserid(accno:bigint){
        this.registerservice.putuser_id(accno).subscribe(()=>{alert("Check your Mail for UserId");this.router.navigate(['/login/']);},error=>{alert(error.error.Message);});   
      }
      CustId(value:number){
        
        if(this.data.Otp!=value)
        {this.errormessage="Enter the correct otp";this.router.navigate(['/forgotuserid/']);}
        if(this.data.Otp==value)
        {this.errormessage="";this.generateuserid(this.AccountNumber);
      }
      }
      accountnum(event){
        this.AccountNumber=event.target.value;
        }
      Otp(event){
        this.OTP=event.target.value;

        }
        custid(){
          this.generateotp(this.AccountNumber);
          
        }


  ngOnInit(): void {
  }

}
