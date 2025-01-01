import { Injectable } from '@angular/core';
import { ApisService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseurl: string = '';
  private readonly authRoute: string = '';

  loggedUser = new BehaviorSubject(null);

  constructor(
    private _apisService: ApisService,
    private _httpClient: HttpClient,
    private _router: Router
  ) {
    this.baseurl = _apisService.baseurl;
    this.authRoute = _apisService.authRoute;
    if (localStorage.getItem('token')) this.saveLogin();
  }

  saveLogin() {
    const token: any = localStorage.getItem('token');
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp <= Math.trunc(Date.now() / 1000)) this.logout();
    else this.loggedUser.next(decodedToken);
    // console.log(decodedToken);
  }

  login(formData: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseurl}${this.authRoute}/login`,
      formData,
      {
        headers: { 'X-CSRF-Token': `${Cookies.get('cookies')}` },
        withCredentials: true,
      }
    );
  }
  //********************  HEAD **************************/

  logout() {
    localStorage.removeItem('token');
    this.loggedUser.next(null);
    this._router.navigate(['/']);
  }

  signup(formData: any): Observable<any> {
    return this._httpClient.post(
      `${this.baseurl}${this.authRoute}/signup`,
      formData,
      {
        headers: { 'X-CSRF-Token': `${Cookies.get('cookies')}` },
        withCredentials: true,
      }
    );
  }

  //********************************* Stage ********************** */
}
