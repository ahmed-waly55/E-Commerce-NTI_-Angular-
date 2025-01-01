import { Pagination } from './../../interfaces/pagination';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, CurrencyPipe, DecimalPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  pagination: Pagination = {};
  products: any[] = [];
  private subscription: any;
  private page: number = 1;
  private limit: number = 20;
  private search: string = '';

  constructor(private _ProductsService: ProductsService) {}

  loadProducts() {
    this.subscription = this._ProductsService
      .getProducts(this.page, this.limit, 'category,name', this.search)
      .subscribe({
        next: (res: any) => {
          this.products = res.data;
          this.pagination = res.pagination;
        },
      });
  }

  searchProducts(value: string) {
    this.search = value;
    this.loadProducts();
  }

  changePage(page: number) {
    this.page = page;
    this.loadProducts();
  }

  ngOnInit() {
    this.loadProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
