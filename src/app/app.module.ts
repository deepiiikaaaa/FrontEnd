import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserdetailComponent } from './userdetail/userdetail.component';
import { FormsModule } from '@angular/forms';
import { UserdetailEditComponent } from './userdetail-edit/userdetail-edit.component';
import { ApprovalComponent } from './approval/approval.component';
import { ApprovalconfirmationComponent } from './approvalconfirmation/approvalconfirmation.component';
import { RegisterComponent } from './register/register.component';
import { TrackingstatusComponent } from './trackingstatus/trackingstatus.component';
import { HomeComponent } from './home/home.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TransdateComponent } from './transdate/transdate.component';
import { TranslisComponent } from './translis/translis.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BeniaddComponent } from './beniadd/beniadd.component';
import { BenificiaryComponent } from './benificiary/benificiary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TransdashComponent } from './transdash/transdash.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { ImpsComponent } from './imps/imps.component';
import { NeftComponent } from './neft/neft.component';
import { SuccessComponent } from './success/success.component';
import { FundtrasferComponent } from './fundtrasfer/fundtrasfer.component';
import { BenidashComponent } from './benidash/benidash.component';
import { ChangepasswordsComponent } from './changepasswords/changepasswords.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { TransverifyComponent } from './transverify/transverify.component';
import { AdminuserlistComponent } from './adminuserlist/adminuserlist.component';
import { EdituserdataComponent } from './edituserdata/edituserdata.component';
import { DatePipe } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { TranssearchComponent } from './transsearch/transsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserdetailEditComponent,
    ApprovalComponent,
    ApprovalconfirmationComponent,
    RegisterComponent,
    TrackingstatusComponent,
    HomeComponent,
    ForgotuseridComponent,
    ForgotpasswordComponent,
    TransdateComponent,
    TranslisComponent,
    LoginComponent,
    LogoutComponent,
    BeniaddComponent,
    BenificiaryComponent,
    DashboardComponent,
    AdminloginComponent,
    TransdashComponent,
    RtgsComponent,
    ImpsComponent,
    NeftComponent,
    SuccessComponent,
    FundtrasferComponent,
    BenidashComponent,
    ChangepasswordsComponent,
    AccountstatementComponent,
    AdminlogoutComponent,
    TransverifyComponent,
    AdminuserlistComponent,
    EdituserdataComponent,
    HelpComponent,
    TranssearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
