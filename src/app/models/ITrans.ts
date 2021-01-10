export interface ITrans{
    Transaction_Id:number;
    From_Account_Number:number;
    Amount:any;
    To_Account_Number:number;
    Mode:string;
    Maturity_Instructions:string;
    Remark:string;
    Transaction_Date:Date;
}