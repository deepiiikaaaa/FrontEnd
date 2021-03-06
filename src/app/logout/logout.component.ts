import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  sessionval:string ="";
  sessionval2:string ="";
  
  constructor(private router:Router) { }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  

  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }
    else{
      localStorage.removeItem("cusid");
      localStorage.setItem("logouttime",this.formatAMPM(new Date))
    }

    
  }

}
