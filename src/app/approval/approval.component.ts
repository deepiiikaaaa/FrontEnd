import { Component, OnInit } from '@angular/core';
import { Iuserdetail } from '../models/Iuserdetail';
import { UserdetailService } from '../services/userdetail.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})

export class ApprovalComponent implements OnInit {
// approval:Iuserdetail={
//   Reference_ID :null,
//   Title :'',
//   First_Name:'',
//   Middle_Name : '',
//   Last_Name :'',
//   Father_Name :'', 
//   Mobile_Number:null,
//   Email_Id :'',
//   Aadhar_Number:null,
//   Date_of_Birth :null,
//   Address_Line1 :'',
//   Address_Line2 :'',
//   Lankmark:'',
//   State:'',
//   City:'',
//   Pincode:null,
//   PermanentAddress_Line1:'',
//   PermanentAddress_Line2:'',
//   PermanentLankmark:'',
//   PermanentState:'',
//   PermanentCity:'',
//   PermanentPincode:null,
//   Occupation_type:'',
//   Source_of_Income:'',
//   Gross_Annual_Income:null,
//   Debit_Card:'',
//   Net_banking:'',
//   Account_type:''
// };

approval:any[];

  constructor(private userservice:UserdetailService) {
  this.userservice.getUserList().subscribe((data)=>{this.approval=data;})
}

  ngOnInit(): void {
  }

}
