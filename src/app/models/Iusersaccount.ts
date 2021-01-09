import { Time } from "@angular/common";

export interface Iusersaccount {

    Account_Number:bigint;
    Customer_Id:number
    Customername:string;
    Login_Password:string;
    Confirm_Login_Password:string;
    Transaction_Password:string;
    Confirm_Transaction_Password:string;
    Balance:number;
    Register_Internet_Banking:string;
    Login_Status:string;
    Logout_Time:Time;
    Reference_Id:number;
    Otp:number;
}