import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Port } from '../../Models/Port';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 jwt_token:string = ''




  url = 'http://localhost:5000/api/portfolio/';
  baseUrl = 'http://localhost:5000/api/users/';

  constructor(private httpclient: HttpClient) {}

  getPortfolio(): Observable<Port[]> {
    return this.httpclient.get<Port[]>(this.url);
  }

  createUsers(user: any): Observable<any> {
   
    return this.httpclient.post(this.baseUrl, user)
  }

 


  login(user: any): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/user`, user);
  }
}
