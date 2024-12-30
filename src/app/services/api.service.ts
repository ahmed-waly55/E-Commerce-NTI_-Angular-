import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor() {}

  readonly baseurl: string = 'http://localhost:3000';
  readonly authRoute: string = '/api/v1/auth';
  readonly productsRoute: string = '/api/v1/products';
}
