import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import {ILog} from './../models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url='http://localhost/bankingg/api/login/';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }

  login(log:ILog):Observable<ILog>{
    return this.http.post<ILog>(this.url+"PostLogin",log,this.httpOptions); 
  }

  lock(log:ILog):Observable<ILog>{
      return this.http.post<ILog>(this.url+"PostLocked",log,this.httpOptions);
    }
  
  decAttemp(id:number):Observable<number>{
    return this.http.put<number>(this.url+"PutAttempt/"+id,this.httpOptions);

  }
  updateattempt(id:number):Observable<any>{
    return this.http.put<any>(this.url+"PutupdateAttempt/"+id,this.httpOptions);
  }
    
}
