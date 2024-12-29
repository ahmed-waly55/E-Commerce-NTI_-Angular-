import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [DecimalPipe, RouterLink, CurrencyPipe],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
})
export class BestSellerComponent {
  products: any[] = [];
  private subscription: any;
  constructor(private _ProductsService: ProductsService) {}

  loadProducts() {
    this.subscription = this._ProductsService
      .getProducts(1, 20, '-sold', '')
      .subscribe({
        next: (res: any) => {
          this.products = res.data;
        },
      });
  }

  ngOnInit() {
    this.loadProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
