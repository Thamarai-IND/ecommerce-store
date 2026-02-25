import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel';
import { EcommerceStore } from '../../ecommerce.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanel, CurrencyPipe],
  templateUrl: './summarize-order.html',
  styleUrl: './summarize-order.scss',
})
export class SummarizeOrder {

  store = inject(EcommerceStore);

  subtotal = computed(() => this.store.cartItems().reduce((acc, item) => Math.round(acc + item.product.price * item.quantity), 0).toFixed(2));
  tax = computed(() => (Math.round(parseFloat(this.subtotal())) * 0.07).toFixed(2));
  total = computed(() => Math.round( parseFloat(this.subtotal()) + parseFloat(this.tax()) ).toFixed(2));

}
