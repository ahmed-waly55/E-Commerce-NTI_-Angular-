import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,DecimalPipe],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent implements OnInit , OnDestroy {

  products: any[] = [];
  private subscription: any;

  constructor(private _productsService: ProductsService){

  }
  loadProducts() {
    this.subscription = this._productsService.getProducts(1, 20, '-sold', '').subscribe({
      next: (res) => {
        this.products = res.data;
        console.log(this.products);
        
      }
    })
  }

  ngOnInit(){
    this.loadProducts();

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
