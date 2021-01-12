import { EmailValidator } from "@angular/forms";

export interface IForgotuser {

    Account_Number:bigint;
    Customer_Id:number
    Reference_Id:number;
    Mobile_Number:bigint;
    Email_Id:string;
    Otp:number;
}