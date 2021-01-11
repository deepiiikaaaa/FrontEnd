import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusersaccount } from '../models/Iusersaccount';
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
    Register_Internet_Banking:'',
    Login_Status:'',
    Logout_Time:null,
    Reference_Id:null,
    Otp:null
   }
   sessionval:string ="";
   id:number ;
  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute) { }

   Changenewpassword(id:number){
    this.registerservice.changenewpassword(this.data,id).subscribe(abc=>{alert("Password Changed");this.router.navigate(['/login']);});
  }

  saveRegister(data:Iusersaccount){
    this.data=data;
    this.Changenewpassword(this.id);
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired");
      this.router.navigate(['/login']);
    }
  }

}
