import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusersaccount } from '../models/Iusersaccount';
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
 

  constructor(private registerservice:UsersaccountService,private router:Router,private route:ActivatedRoute) { }

  registerDetail(){
    this.registerservice.registerdetail(this.data).subscribe(()=>{alert("Record Edited");this.router.navigate(['/login']);});
  }

  saveRegister(data:Iusersaccount){
    this.data=data;
    this.registerDetail();
  }
  ngOnInit(): void {
  }

}
