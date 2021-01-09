import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import { Iusersaccount } from '../models/Iusersaccount';

@Injectable({
  providedIn: 'root'
})
export class UsersaccountService {

  url="http://localhost/banking/api/usersaccount";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  getbyCustId(id:number):Observable<Iusersaccount>{
    return this.http.get<Iusersaccount>(this.url+"/GetSetnewPassword/"+id);
  }

  getbyAccountnumber(id:bigint):Observable<Iusersaccount>{
    return this.http.get<Iusersaccount>(this.url+"/GetCustId/"+id);
  }

  registerdetail(data:Iusersaccount):Observable<Iusersaccount>{
    return this.http.put<Iusersaccount>(this.url+'/PutRegister/'+data.Account_Number,data,this.httpOptions);
  }

  setnewpassword(data:Iusersaccount,Account_Number:number):Observable<Iusersaccount>{
    return this.http.put<Iusersaccount>(this.url+'/PutNewPassword/'+Account_Number,data,this.httpOptions);
  }
}
