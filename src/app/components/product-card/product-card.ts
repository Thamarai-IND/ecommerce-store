import { Component, computed, inject, input, Input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce.store';

@Component({
  selector: 'app-product-card',
  imports: [MatIcon,MatButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  product = input.required<Product>();

  addToCartClicked = output<Product>();

  goToProduct = output<Product>();

  store = inject(EcommerceStore);


}
