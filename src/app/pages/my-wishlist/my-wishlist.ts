import { Component, computed, inject, input } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";
import { EcommerceStore } from '../../ecommerce.store';
import { ProductCard } from "../../components/product-card/product-card";
import { Product } from '../../models/product';
import { MatIcon } from "@angular/material/icon";
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { EmptyWishlist } from "./empty-wishlist/empty-wishlist";

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatAnchor, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.scss',
})
export class MyWishlist {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  isInWishlist = computed(() => {
    return this.store.wishlistItems().find(p => p.id === this.product().id);
  })

  toggleWishlist(product: Product) {
    if(this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
