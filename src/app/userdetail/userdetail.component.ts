import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  isChecked:boolean=false;
  title:string[]=["Mr.","Ms.","Mrs."];
  accounttype:string[]=["Salary","Savings"];
  netbanking:string[]=["YES","NO"];
  debitcard:string[]=["YES","NO"];
  referenceid:number=45;
  adhaarnum:number=null;
  detail:string='';
  

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
  x:string;
  constructor(private userservice:UserdetailService,private router:Router,private route:ActivatedRoute) { }

  getRefid(){
    this.userservice.getRefid().subscribe((data:Iuserdetail)=>{
      this.details=data;
    alert("kindly use the below Reference Id to track your approval status: "+this.details.Reference_ID);
    this.router.navigate(['/tracking']);
  },
    error=>{alert(error.error.Message)});
    
  }
  addUserdetail(){
    this.userservice.addUserdetail(this.details).subscribe(
      ()=>{alert("sucessfully registered"); 
      this.getRefid();
    },
    error=>{alert(error.error.Message)}
    );
    
    
  }
  // alert("Request For Opening an Account has been Submitted and kindly use the below Reference Id to track your approval status:"+this.details.Reference_ID);
  checkValue(form :Iuserdetail){
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
  saveDetails(details:Iuserdetail):void{
   // alert("submited");
    this.details=details;
    this.adhaarnum=details.Aadhar_Number;
    this.addUserdetail();
    
    
  }

  ngOnInit(): void {
  }

}
