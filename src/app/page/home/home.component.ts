import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BestSellerComponent } from "../../components/best-seller/best-seller.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BestSellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
