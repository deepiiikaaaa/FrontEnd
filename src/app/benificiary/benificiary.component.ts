import { Component, OnInit } from '@angular/core';
import { IBeni } from '../models/IBenificiary';
import { IUser } from '../models/IUser';
import { Router} from '@angular/router';
import {BenificiaryServiceService} from './../services/benificiary-service.service';

@Component({
  selector: 'app-benificiary',
  templateUrl: './benificiary.component.html',
  styleUrls: ['./benificiary.component.css']
})
export class BenificiaryComponent implements OnInit {
  benili:IBeni[];
  beni:IBeni;
  user:IUser;
  sessionval:string ="";
  id:number ;
  tempid:number;
  constructor(private benifiservice: BenificiaryServiceService,private router:Router) {  }


  getuser(){
    this.benifiservice.getuser(this.id).subscribe((data:IUser) =>{
      this.user = data;
      this.tempid = this.user.Account_Number;
      this.getbeni();
    })
  }

  getbeni(){
    this.benifiservice.getbeni(this.tempid).subscribe((data:IBeni[]) => {
      console.log(data);
      this.benili = data;
    })
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
