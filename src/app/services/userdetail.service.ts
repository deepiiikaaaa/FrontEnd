import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import { Iuserdetail } from '../models/Iuserdetail';



@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  
  url="http://localhost/bankingg/api/userdetail";
  //url="http://localhost:62477/api/userdetail"
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  getusernet(id:number):Observable<string>{
    return this.http.get<string>(this.url+"/GetFetch/"+id);
  }
  
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/getaDetails");
  }
  getUserAllList():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/GetallDetails");
  }

  getUserdetail(id:number):Observable<Iuserdetail>{
    return this.http.get<Iuserdetail>(this.url+"/GetDetails/"+id);
  }
  

  getRefid():Observable<Iuserdetail>{
    return this.http.get<Iuserdetail>(this.url+"/Getrefid");
  }

  // getcredential(id:number):Observable<IEamil>{
  //   return this.http.get<IEamil>(this.url+"/Getcredentials/"+id,this.httpOptions);
  // }
  // // getRefid(id:number):Observable<Iuserdetail>{
  // //   return this.http.get<Iuserdetail>(this.url+"/GetRefernceid/"+id);
  // // }

  addUserdetail(detail:Iuserdetail):Observable<Iuserdetail>{
    return this.http.post<Iuserdetail>(this.url+"/PostDetails",detail,this.httpOptions);
  }

  editUserdetail(details:Iuserdetail):Observable<Iuserdetail>{
    return this.http.put<Iuserdetail>(this.url+'/PutDetails/'+details.Reference_ID,details,this.httpOptions);
  }

  editUserdata(details:Iuserdetail):Observable<Iuserdetail>{
    return this.http.put<Iuserdetail>(this.url+'/PutAdminEdit/'+details.Reference_ID,details,this.httpOptions);
  }

}
