import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {
  alldata:any[];
  sessionval:string ="";
  
    constructor(private userservice:UserdetailService,private router:Router) {
    this.userservice.getUserAllList().subscribe((data)=>{this.alldata=data;}
    ,error=>{alert(error.error.Message);})
  }
  
    ngOnInit(): void {
      this.sessionval= localStorage.getItem("adId");
      
      if(this.sessionval==null)
      {
        alert("session expired"+localStorage.getItem("adminlogouttime"));
        this.router.navigate(['/admin']);
      }
    }
  
  }