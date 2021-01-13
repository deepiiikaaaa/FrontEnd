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
  Reference_Id:null,
  Otp:null
 }
 checkotp:IForgotuser={
  Account_Number:null,
  Customer_Id:null,
  Reference_Id:null,
  Mobile_Number:null,
  Email_Id:null,
  Otp:null
}
isTruee:boolean=false;
yesno:string="no";
OTP:number=null;
OtPauto:number=null;
 

  constructor(private registerservice:UsersaccountService,private detailservice:UserdetailService,private router:Router,private route:ActivatedRoute) { }


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
    // if(this.yesno=="YES"){
    //     this.isTruee=true;
        
    // }
    if(this.yesno=="NO"){
      alert(this.checkotp.Customer_Id + " has not scubscribed for internet banking please subscribe to use the Netbanking facility");
      this.router.navigate(['/home']);
    }
  }

  RegisterDetail(value:number){
    if(this.checkotp.Otp==value){
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
  generateotp(accno:bigint){
    this.registerservice.putotp_id(accno).subscribe(()=>{alert("check your Mail for otp");this.getbyAccountnumber(this.data.Account_Number);},error=>{alert(error.error.Message);});   
  }

  saveRegister(data:Iusersaccount){
    this.data=data;
    this.generateotp(this.data.Account_Number);
    
  }
  ngOnInit(): void {
  }

}
