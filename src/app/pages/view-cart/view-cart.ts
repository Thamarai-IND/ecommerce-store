import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EcommerceStore } from '../../ecommerce.store';
import { BackButton } from "../../components/back-button/back-button";
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from './tease-wishlist/tease-wishlist';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';

@Component({
  selector: 'app-view-cart',
  imports: [CommonModule, RouterModule, BackButton, ListCartItems, TeaseWishlist, SummarizeOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export class ViewCart {

  store = inject(EcommerceStore);
}
