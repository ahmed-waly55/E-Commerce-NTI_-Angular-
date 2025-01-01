import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products-detailss',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './products-detailss.component.html',
  styleUrl: './products-detailss.component.scss',
})
export class ProductsDetailssComponent implements OnInit, OnDestroy {
  private subscription: any;
  private productId: string = '';
  product: any;
  errorMsg: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  loadProduct(productId: string) {
    this.subscription = this._productsService.getProduct(productId).subscribe({
      next: (res) => {
        this.product = res.data;
      },
      error: (err) => {
        err.error.message
          ? (this.errorMsg = err.error.message)
          : (this.errorMsg = 'Invalid product details');
        // err.message ? this.errorMsg = err.message : this.errorMsg = err.errors[0].msg;
      },
    });
  }

  ngOnInit() {
    this.productId = this._activatedRoute.snapshot.params['id'];
    this.loadProduct(this.productId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
