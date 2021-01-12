import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import {LoginServiceService} from './../services/login-service.service';    
import { FormsModule } from '@angular/forms';  
import { ILog } from '../models/ILogin';

@Component({
  selector: 'app-transverify',
  templateUrl: './transverify.component.html',
  styleUrls: ['./transverify.component.css']
})
export class TransverifyComponent implements OnInit {
  model : ILog = { CustomerID : null, Password : null};
  num:number=null;
  sessionval:string=null;
  constructor(private router:Router,private LoginService:LoginServiceService) { }

  saveLogin(model:ILog){
    this.model.CustomerID=this.num;
    this.model.Password=model.Password;
    localStorage.setItem("transid", (this.model.CustomerID).toString());
    this.login();
  }

  login(){
    this.LoginService.trans(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+" can proceed in for transaction ");
        this.router.navigate(['/Fundtransfer']);
      }, error => { 
        alert(error.error.Message);
        this.router.navigate(['/dashboard']);
        
    }
    );
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.num=parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }
  }

}