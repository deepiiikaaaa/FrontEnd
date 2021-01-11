import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {BenificiaryServiceService} from './../services/benificiary-service.service';


@Component({
  selector: 'app-beniadd',
  templateUrl: './beniadd.component.html',
  styleUrls: ['./beniadd.component.css']
})
export class BeniaddComponent implements OnInit {
  beni:IBeni={ Holder_Account_Number:null, Beneficiary_Account_Number:null, Save_Status: null, 
    Beneficiary_Name:null, Nick_Name:null};
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;
  isChecked:boolean=false;

  constructor(private benifiservice: BenificiaryServiceService,private router:Router) {  }

  getuser(){
    this.benifiservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
    })
  }

  checkValue(form:IBeni)
{
  if(this.isChecked){
    this.beni.Save_Status='Save';
  }
}

  addbeni(){
    this.benifiservice.addbeni(this.tempid,this.beni).subscribe(
      ()=> {
          alert("record added");
          this.router.navigate(['/beni']);
    },error => { 
      alert(error.error.Message);}
    );
  }

  savebeni(beni:IBeni){
    this.beni=beni;
    this.addbeni();
  }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }

    this.getuser();
  }


}
