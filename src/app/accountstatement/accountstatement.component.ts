import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iaccountstatement } from '../models/Iaccountstatement';

import { UsersaccountService } from '../services/usersaccount.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  statement:Iaccountstatement[]
  sessionval:string ="";
  id:number ;
  
   constructor(private registerservice:UsersaccountService,private router:Router)  {}
 
   getstatement(id:number){
    this.registerservice.getstatement(id).subscribe((data:Iaccountstatement[])=>{this.statement=data;}
    ,error=>{alert(error.error.Message);}
    )
    
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
    this.getstatement(this.id);
}
  }

}
