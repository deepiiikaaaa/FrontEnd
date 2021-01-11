import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundtrasfer',
  templateUrl: './fundtrasfer.component.html',
  styleUrls: ['./fundtrasfer.component.css']
})
export class FundtrasferComponent implements OnInit {
  sessionval:string ="";
  id:number ;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }

  }

}
