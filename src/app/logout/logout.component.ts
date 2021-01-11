import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  sessionval:string ="";

  constructor() { }

  ngOnInit(): void {
    this.sessionval=localStorage.getItem("cusid");
    localStorage.clear();
  }

}
