import { Injectable } from '@angular/core';
import { ApisService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie'


@Injectable({
  providedIn: 'root'
})
export class AuthService  {
private readonly baseurl:string = '';
private readonly authRoute:string = '';

  constructor(private _apisService: ApisService, private _httpClient: HttpClient) { 
    this.baseurl = _apisService.baseurl;
    this.authRoute = _apisService.authRoute;

  }

  login(formData:any):Observable<any>{
    return this._httpClient.post(`${this.baseurl}${this.authRoute}/login`, formData, {
      headers: {'X-CSRF-Token': `${Cookies.get('cookies')}`},
      withCredentials: true
    })
  }

<<<<<<< HEAD
   

=======
  signup(formData:any):Observable<any>{
    return this._httpClient.post(`${this.baseurl}${this.authRoute}/signup`,formData , {
      headers: {'X-CSRF-Token': `${Cookies.get('cookies')}`},
      withCredentials: true
    })
>>>>>>> auth/signup
  }
}
