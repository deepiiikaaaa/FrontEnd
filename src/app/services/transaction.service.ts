import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import {ITrans} from './../models/ITrans';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url='http://localhost/bankingg/api/transaction/';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  gettrans(id:number):Observable<ITrans[]>{
    return this.http.get<ITrans[]>(this.url+"GetTransaction/"+id,this.httpOptions);}
    
  gettransdate(id:string):Observable<ITrans[]>{
    return this.http.get<ITrans[]>(this.url+"GetUs?id="+id,this.httpOptions);}

    getuser(id:number):Observable<any>{
      return this.http.get<any>(this.url+"GetUser/"+id,this.httpOptions);
    }
    addbeni(id:number,dept:ITrans):Observable<ITrans>{
      return this.http.post<ITrans>(this.url+"PostTransaction/"+id,dept,this.httpOptions);
    }
    getLasttrans(id:number):Observable<ITrans>{
      return this.http.get<ITrans>(this.url+"GetLastTransaction/"+id,this.httpOptions);}
  
}
