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
  count:number = 0;
  constructor(private router:Router,private LoginService:LoginServiceService) { }

  login(){
    this.LoginService.login(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+" has logged in");
        this.router.navigate(['/dashboard']);
      }, error => { 
        alert(error.error.Message);
        this.count++;
        if(this.count == 3){
          this.lock();
      }
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
