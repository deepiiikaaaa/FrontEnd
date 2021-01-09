import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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




  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute ) { }

  getbyAccountnumber(id:bigint){
    //console.log(id);
    this.registerservice.getbyAccountnumber(id).subscribe((data:Iusersaccount)=>
    {this.data=data;
      if(this.OTP!=this.data.Otp)
      {this.data.Customer_Id=null;this.errormessage="Enter the correct otp";}
      if(this.OTP==this.data.Otp)
      {this.errormessage="";alert("your user id is"+this.data.Customer_Id);this.router.navigate(['/login/']);
    }
      });
    }

      accountnum(event){
        this.AccountNumber=event.target.value;
        }
      Otp(event){
        this.OTP=event.target.value;
        }
        custid(){
          
          this.getbyAccountnumber(this.AccountNumber);
        }


  ngOnInit(): void {
  }

}
