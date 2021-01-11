import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-trackingstatus',
  templateUrl: './trackingstatus.component.html',
  styleUrls: ['./trackingstatus.component.css']
})
export class TrackingstatusComponent implements OnInit {
tracking:Iuserdetail={
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
referenceid:number;
errormessage:string="";
  constructor(private userservice:UserdetailService,private router:Router) { }

  gettrackingstatus(id:number){
    this.userservice.getUserdetail(id).subscribe((data:Iuserdetail)=>{this.tracking=data;if(this.tracking.Reference_ID!=this.referenceid){this.errormessage="Reference Id not found";this.router.navigate(['/tracking'])}{this.errormessage="";}})
    
      }

  ngOnInit(): void {

  }
refid(event){
this.referenceid=event.target.value;
}

ontrack(){
this.gettrackingstatus(this.referenceid);
}
}
