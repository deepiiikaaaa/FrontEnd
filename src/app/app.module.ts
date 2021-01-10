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
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { ForgotuseridComponent } from './forgotuserid/forgotuserid.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
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


@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserdetailEditComponent,
    ApprovalComponent,
    ApprovalconfirmationComponent,
    RegisterComponent,
    TrackingstatusComponent,
    UserloginComponent,
    HomeComponent,
    ForgotuseridComponent,
    ForgotpasswordComponent,
    SetnewpasswordComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
