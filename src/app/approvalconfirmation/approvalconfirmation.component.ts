import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-approvalconfirmation',
  templateUrl: './approvalconfirmation.component.html',
  styleUrls: ['./approvalconfirmation.component.css']
})
export class ApprovalconfirmationComponent implements OnInit {
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
  constructor(private userservice:UserdetailService,private route:ActivatedRoute,public router:Router) { }
  getUserdetail(id:number){
    this.userservice.getUserdetail(id).subscribe((data:Iuserdetail)=>{this.details=data;})
      }

  ngOnInit(): void {

    const id=+this.route.snapshot.paramMap.get('id');
    
    this.getUserdetail(id);

  }

  editDetail(){
    console.log(this.details);
    this.userservice.editUserdetail(this.details).subscribe(()=>{alert("Approved");this.router.navigate(['/approval']);});
  }

  update(){
    this.details.Approval_Status="yes";
    this.editDetail();
  }

}
