import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import { Iusersaccount } from '../models/Iusersaccount';
import { Iaccountstatement } from '../models/Iaccountstatement';
import { IForgotuser } from '../models/IForgotuserid';

@Injectable({
  providedIn: 'root'
})
export class UsersaccountService {

  url="http://localhost/bankingg/api/usersaccount";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  getbyCustId(id:number):Observable<IForgotuser>{
    return this.http.get<IForgotuser>(this.url+"/GetSetnewPassword/"+id);
  }

  getbyAccountnumber(id:bigint):Observable<IForgotuser>{
    return this.http.get<IForgotuser>(this.url+"/GetCustId/"+id);
  }

  getUsersAccount(id:number):Observable<number>{
    return this.http.get<number>(this.url+""+id)
  }

  registerdetail(data:Iusersaccount):Observable<Iusersaccount>{
    return this.http.put<Iusersaccount>(this.url+'/PutRegister/'+data.Account_Number,data,this.httpOptions);
  }
  
  setnewpassword(data:Iusersaccount,Account_Number:number):Observable<Iusersaccount>{
    return this.http.put<Iusersaccount>(this.url+'/PutNewPassword/'+Account_Number,data,this.httpOptions);
  }

  deletelocked(Account_Number:number):Observable<string>{
    return this.http.delete<string>(this.url+"/Deletelocked/"+Account_Number,this.httpOptions);
  }

  changenewpassword(data:Iusersaccount,Customer_Id:number):Observable<Iusersaccount>{
    return this.http.put<Iusersaccount>(this.url+'/PutChangePassword/'+Customer_Id,data,this.httpOptions)
  }

  getstatement(id:number):Observable<Iaccountstatement[]>{
  return this.http.get<Iaccountstatement[]>(this.url+"/Getstatement/"+id);
  }
}
