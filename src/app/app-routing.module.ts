import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalconfirmationComponent } from './approvalconfirmation/approvalconfirmation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TrackingstatusComponent } from './trackingstatus/trackingstatus.component';
import { UserdetailEditComponent } from './userdetail-edit/userdetail-edit.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {RtgsComponent} from './rtgs/rtgs.component';
import {ImpsComponent} from './imps/imps.component';
import {NeftComponent} from './neft/neft.component';
import {SuccessComponent} from './success/success.component';
import { LoginComponent} from './login/login.component';
import {BenificiaryComponent} from './benificiary/benificiary.component';
import {BeniaddComponent} from './beniadd/beniadd.component';
import {TranslisComponent} from './translis/translis.component';
import {LogoutComponent} from './logout/logout.component'
import {TransdateComponent} from './transdate/transdate.component'
import { FundtrasferComponent } from './fundtrasfer/fundtrasfer.component';
import { TransdashComponent } from './transdash/transdash.component';
import { BenidashComponent } from './benidash/benidash.component';
import { ChangepasswordsComponent } from './changepasswords/changepasswords.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { TransverifyComponent } from './transverify/transverify.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { EdituserdataComponent } from './edituserdata/edituserdata.component';
import { HelpComponent } from './help/help.component';
import { TranssearchComponent } from './transsearch/transsearch.component';

const routes: Routes = [
  {path:"openaccount",component:UserdetailComponent},
  {path:"useredit/:id",component:UserdetailEditComponent},
  {path:"approval",component:ApprovalComponent},
  {path:"approvalconfirm/:id",component:ApprovalconfirmationComponent},
  {path:"register",component:RegisterComponent},
  {path:"tracking",component:TrackingstatusComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotuserid",component:ForgotuseridComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Fundtransfer',component:FundtrasferComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'adminlogout',component:AdminlogoutComponent},
  {path:'rtgs',component:RtgsComponent},
  {path:'imps',component:ImpsComponent},
  {path:'neft',component:NeftComponent},
  {path:'succ',component:SuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'beni',component:BenificiaryComponent},
  {path:'beniadd',component:BeniaddComponent},
  {path:'Transactionsummary',component:TranslisComponent},
  {path:'logout',component:LogoutComponent},
  {path:'Transactionstatement',component:TransdateComponent},
  {path:'transdash',component:TransdashComponent},
  {path:'benidash',component:BenidashComponent},
  {path:'changepassword',component:ChangepasswordsComponent},
  {path:'Accountstatement',component:AccountstatementComponent},
  {path:'transverify',component:TransverifyComponent},
  {path:'adminuserlist',component:AdminuserlistComponent},
  {path:'edituserdata/:id',component:EdituserdataComponent},
  {path:'help',component:HelpComponent},
  {path:'transsearch',component:TranssearchComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
