import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-userdetail-edit',
  templateUrl: './userdetail-edit.component.html',
  styleUrls: ['./userdetail-edit.component.css']
})
export class UserdetailEditComponent implements OnInit {

  isChecked:boolean=false;
  sessionval:string ="";
  id:number ;

  details:Iuserdetail={
    Reference_ID :null,
    Title :'',
    First_Name:'',
    Middle_Name : '',
    Last_Name :'',
    Father_Name :'', 
    Mobile_Number:null,
    Email_Id :'',
    Aadhar_Number:null,
    Date_of_Birth :null,
    Address_Line1 :'',
    Address_Line2 :'',
    Lankmark:'',
    State:'',
    City:'',
    Pincode:null,
    PermanentAddress_Line1:'',
    PermanentAddress_Line2:'',
    PermanentLankmark:'',
    PermanentState:'',
    PermanentCity:'',
    PermanentPincode:null,
    Occupation_type:'',
    Source_of_Income:'',
    Gross_Annual_Income:null,
    Debit_Card:'',
    Net_banking:'',
    Account_type:'',
    Approval_Status:'',
    Reject_Status:''
  };
  
  constructor(private userservice:UserdetailService,private router:Router,private route:ActivatedRoute,private datePipe: DatePipe) { }

  checkValue(details :Iuserdetail){
    if(this.isChecked)
    {this.details.PermanentAddress_Line1=this.details.Address_Line1;
    this.details.PermanentAddress_Line2=this.details.Address_Line2;
    this.details.PermanentLankmark=this.details.Lankmark;
    this.details.PermanentState=this.details.State;
    this.details.PermanentCity=this.details.City;
    this.details.PermanentPincode=this.details.Pincode;

    }
    else{
    this.details.PermanentAddress_Line1="";
    this.details.PermanentAddress_Line2="";
    this.details.PermanentLankmark="";
    this.details.PermanentState="";
    this.details.PermanentCity="";
    this.details.PermanentPincode=null;
  }
}

getUserdetail(id:number){
  this.userservice.getUserdetail(id).subscribe((data:Iuserdetail)=>{this.details=data;this.details.Date_of_Birth = this.datePipe.transform(Date.now(),'yyyy-MM-dd');},
  error=>{alert(error.error.Message);});  
    }

    editDetail(){
      this.userservice.editUserdetail(this.details).subscribe(()=>{alert("Details Updated");this.router.navigate(['/dashboard']);
    },
    error=>{alert(error.error.Message);});
    }

    saveDetails(details:Iuserdetail){
      this.details=this.details;
      this.editDetail();
    }


  ngOnInit(): void {
    this.sessionval= localStorage.getItem("cusid");
    this.id = parseInt(this.sessionval);
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("logouttime"));
      this.router.navigate(['/login']);
    }
    else{
    const id=+this.route.snapshot.paramMap.get('id');
    
    this.getUserdetail(id);
    }

  }


}
