import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-edituserdata',
  templateUrl: './edituserdata.component.html',
  styleUrls: ['./edituserdata.component.css']
})
export class EdituserdataComponent implements OnInit {
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
  accounttype:string[]=["Salary","Savings"];
  netbanking:string[]=["YES","NO"];
  debitcard:string[]=["YES","NO"];
  sessionval:string="";
  id:number=null;
  constructor(private userservice:UserdetailService,private router:Router,private route:ActivatedRoute) { }
  getUserdetail(id:number){
    this.userservice.getUserdetail(id).subscribe((data:Iuserdetail)=>{this.details=data;},
    error=>{alert(error.error.Message);});  
      }
  
      editDetail(){
        this.userservice.editUserdata(this.details).subscribe(()=>{alert("Details Updated");this.router.navigate(['/adminuserlist']);
      },
      error=>{alert(error.error.Message);});
      }
  
      saveDetails(details:Iuserdetail){
        this.details=this.details;
        this.editDetail();
      }
  
  
    ngOnInit(): void {
      this.sessionval= localStorage.getItem("adId");
      this.id = parseInt(this.sessionval);
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
  
  
  }
  