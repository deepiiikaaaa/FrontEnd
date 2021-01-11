import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import {LoginServiceService} from './../services/login-service.service';    
import { FormsModule } from '@angular/forms';  
import { ILog } from '../models/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : ILog = { CustomerID : null, Password : null};    
  num : string;
  attemp:number=null;
  
  constructor(private router:Router,private LoginService:LoginServiceService) { }

  login(){
    this.LoginService.login(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+" has logged in");
        this.updateAttempt();
        this.router.navigate(['/dashboard']);
      }, error => { 
        alert(error.error.Message);
          this.decAttemp();
    }
    );
  }

  updateAttempt(){
    this.LoginService.updateattempt(this.model.CustomerID).subscribe(()=>{},
    error=>{
      alert(error.error.Message);
    }
      );
    }
    
  

  decAttemp(){
    this.LoginService.decAttemp(this.model.CustomerID).subscribe((data)=>{this.attemp=data;alert("you have"+this.attemp+"attempts before account locks")},
    error=>{
      alert(error.error.Message);

      this.lock();
    }
    );
  }

  lock(){
    this.LoginService.lock(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+"has been locked try forget password");
        this.router.navigate(['/login']);
      }
      )
      
  }


  saveLogin(model:ILog){
    this.model=model;
    this.num=model.CustomerID.toString();
    localStorage.setItem("cusid", this.num);
    this.login();
  }

  ngOnInit(): void {
  }

}
