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
  constructor(private router:Router,private LoginService:LoginServiceService) { }

  login(){
    this.LoginService.login(this.model).subscribe(
      () => {
        alert(this.model.CustomerID+" has logged in");
        this.router.navigate(['/dashboard']);
      }, error => { 
        alert(error.error.Message);
      }
    );
  }

  saveLogin(model:ILog){
    this.model=model;
    this.num=model.CustomerID.toString();
    sessionStorage.setItem("cusid", this.num);
    this.login();
  }

  ngOnInit(): void {
  }

}
