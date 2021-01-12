import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEamil } from '../models/IEmail';

import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-approvalconfirmation',
  templateUrl: './approvalconfirmation.component.html',
  styleUrls: ['./approvalconfirmation.component.css']
})
export class ApprovalconfirmationComponent implements OnInit {
  sessionval:string="";
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
  Approval_Status:''
};
credential:IEamil={
  Reference_Id: null,
  Account_Number : null,
  Customer_Id : null,

  Login_Password : "",
}


refid:number=null;
  constructor(private userservice:UserdetailService,private route:ActivatedRoute,public router:Router) { }
  getUserdetail(id:number){
    this.userservice.getUserdetail(id).subscribe((data:Iuserdetail)=>{this.details=data;},
    error=>{alert(error.error.Message);})
      }

  ngOnInit(): void {

    this.sessionval= localStorage.getItem("adId");
    
    if(this.sessionval==null)
    {
      alert("session expired"+localStorage.getItem("adminlogouttime"));
      this.router.navigate(['/admin']);
    }
    else{
    const id=+this.route.snapshot.paramMap.get('id');
    
    this.getUserdetail(id);
    }
  }


  editDetail(){
    this.userservice.editUserdetail(this.details).subscribe(()=>{alert("Approved");this.router.navigate(['/approval']);
    this.email(this.details.Reference_ID);
  });
  }
email(id:number){
  this.userservice.getcredential(id).subscribe((data:IEamil)=>{this.credential=data;alert(this.credential.Account_Number+":"+this.credential.Customer_Id+":"+this.credential.Login_Password);});
}


  update(){
    this.details.Approval_Status="yes";
    this.editDetail();
  }

}
