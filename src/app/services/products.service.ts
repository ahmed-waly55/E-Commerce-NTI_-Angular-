import { Injectable } from '@angular/core';
import { ApisService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly baseurl:string = '';
  private readonly productsRoute: string = '';

  constructor(private _apiService:ApisService , private _HttpClient:HttpClient) {
    this.baseurl = _apiService.baseurl;
    this.productsRoute = _apiService.productsRoute;
   }

   getProducts(page: number = 1, limit: number = 20, sort: string = 'name', search: string): Observable<any> {
    return this._HttpClient.get(`${this.baseurl}${this.productsRoute}?page=${page}&limit=${limit}&sort=${sort}&search=${search}`, {withCredentials: true})
  }

  getProduct(productId: string): Observable<any> {
    return this._HttpClient.get(`${this.baseurl}${this.productsRoute}/${productId}`, {withCredentials: true})
  }

}
