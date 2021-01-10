import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import {IBeni} from './../models/IBenificiary';

@Injectable({
  providedIn: 'root'
})
export class BenificiaryServiceService {
  url='http://localhost/bankingg/api/benificiary/';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }

  getbeni(id:number):Observable<IBeni[]>{
    return this.http.get<IBeni[]>(this.url+"GetBenificiary/"+id,this.httpOptions);}

  getuser(id:number):Observable<any>{
    return this.http.get<any>(this.url+"GetUser/"+id,this.httpOptions);
  }

  addbeni(id:number,dept:IBeni):Observable<IBeni>{
    return this.http.post<IBeni>(this.url+"PostBenificiary/"+id,dept,this.httpOptions);
  }   
}
