import { Injectable } from '@angular/core';
import { ApisService } from './api.servics.ts.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicsTsService {
private readonly baseurl:string = '';
private readonly authRoute:string = '';
  constructor(private _apisService: ApisService, private _httpClient: HttpClient, private _router: Router) { 
    this.baseurl = _apisService.baseurl;
    this.authRoute = _apisService.authRoute;

  }

  login(formData:any):Observable<any>{
    return this._httpClient.post(`${this.baseurl}${this.authRoute}/login`,formData,{

    })


  }
}
