import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AdminServiceService} from './../services/admin-service.service';
import {Router} from '@angular/router';
import {IAdmin} from './../models/IAdmin';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admindeets:IAdmin={Admin_Id:null,Password:null};
  num:string="";
  sessionval="";
    constructor(private adminservice:AdminServiceService,private router:Router) { }
  validate(){
    this.adminservice.validate(this.admindeets).subscribe(
      ()=>{
        alert("Successful Login!");
        this.router.navigate(['/approval']);
      },error => { 
        alert(error.error.Message);
      }
    ); 
  }
  saveAdmin(admindeets:IAdmin):void{
    this.admindeets=admindeets;
    this.num=admindeets.Admin_Id.toString();
    localStorage.setItem("adId",this.num);
    this.validate();
  }
 

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("adId");
    
    if(this.sessionval!=null)
    {
      alert("Already Logged In");
      this.router.navigate(['/approval']);
    }
  }
  

}
