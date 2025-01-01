import { ApisService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseurl: string = '';
  private productsRoute: string = '';
  constructor(
    private _ApisService: ApisService,
    private _HttpClient: HttpClient
  ) {
    this.baseurl = _ApisService.baseurl;
    this.productsRoute = _ApisService.productsRoute;
  }

  getProducts(
    page: number = 1,
    limit: number = 20,
    sort: string = 'name',
    search: string
  ) {
    return this._HttpClient.get(
      `${this.baseurl}${this.productsRoute}?page=${page}&limit=${limit}&sort=${sort}&search=${search}`,
      { withCredentials: true }
    );
  }
}
