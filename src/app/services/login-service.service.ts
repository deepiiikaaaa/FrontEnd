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
 
}