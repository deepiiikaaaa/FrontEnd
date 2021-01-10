import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {IAdmin} from './../models/IAdmin';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url="http://localhost/bankingg/api/admin/";
  httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  validate(admindeets:IAdmin):Observable<IAdmin>{
    return this.http.post<IAdmin>(this.url+"PostAdLogin",admindeets,this.httpOptions);
  }
}
