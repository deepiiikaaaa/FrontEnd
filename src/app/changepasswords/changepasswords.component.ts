import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusersaccount } from '../models/Iusersaccount';
import { UserdetailService } from '../services/userdetail.service';
import { UsersaccountService } from '../services/usersaccount.service';

@Component({
  selector: 'app-changepasswords',
  templateUrl: './changepasswords.component.html',
  styleUrls: ['./changepasswords.component.css']
})
export class ChangepasswordsComponent implements OnInit {

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
   isTruee:boolean=false;
yesno:string="no";
   sessionval:string ="";
   id:number ;
  constructor(private registerservice:UsersaccountService,private detailservice:UserdetailService,private router:Router,private route:ActivatedRoute) { }

   Changenewpassword(id:number){
    this.registerservice.changenewpassword(this.data,id).subscribe(abc=>{alert("Password Changed");this.router.navigate(['/login']);},
    error=>{alert(error.error.Message);});
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
       this.isTruee=true;
    this.Changenewpassword(this.id);
     }
    if(this.yesno=="NO"){
      alert(this.id+ " has not scubscribed for internet banking please subscribe to use the Netbanking facility");
      this.router.navigate(['/home']);
    }
  }

  saveRegister(data:Iusersaccount){
    this.data=data;
    this.getDetail();
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }
  }

}
