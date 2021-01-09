import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalconfirmationComponent } from './approvalconfirmation/approvalconfirmation.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { TrackingstatusComponent } from './trackingstatus/trackingstatus.component';
import { UserdetailEditComponent } from './userdetail-edit/userdetail-edit.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {RtgsComponent} from './rtgs/rtgs.component';
import {ImpsComponent} from './imps/imps.component';
import {NeftComponent} from './neft/neft.component';
import {SuccessComponent} from './success/success.component';
const routes: Routes = [
  {path:"openaccount",component:UserdetailComponent},
  {path:"useredit/:id",component:UserdetailEditComponent},
  {path:"approval",component:ApprovalComponent},
  {path:"approvalconfirm/:id",component:ApprovalconfirmationComponent},
  {path:"register",component:RegisterComponent},
  {path:"tracking",component:TrackingstatusComponent},
  {path:"login",component:UserloginComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotuserid",component:ForgotuseridComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"setnewpassword/:id",component:SetnewpasswordComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'rtgs',component:RtgsComponent},
  {path:'imps',component:ImpsComponent},
  {path:'neft',component:NeftComponent},
  {path:'succ',component:SuccessComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
