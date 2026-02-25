import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { CurrencyPipe } from '@angular/common';
import { QtySelector } from '../../components/qty-selector/qty-selector';
import { EcommerceStore } from '../../ecommerce.store';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-show-cart-items',
  imports: [CurrencyPipe, QtySelector, MatIcon],
  templateUrl: './show-cart-items.html',
  styleUrl: './show-cart-items.scss',
})
export class ShowCartItems {

  item = input.required<CartItem>();
  store = inject(EcommerceStore);
  total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2));
}
