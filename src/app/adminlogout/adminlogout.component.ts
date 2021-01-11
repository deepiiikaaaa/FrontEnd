import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.css']
})
export class AdminlogoutComponent implements OnInit {
  sessionval:string ="";
  
  
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
    this.sessionval=localStorage.getItem("adId");
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("adminlogouttime"));
      this.router.navigate(['/admin']);
    }
    else{
      localStorage.removeItem("adId");
      localStorage.setItem("adminlogouttime",this.formatAMPM(new Date))
    }

   
  }

}
