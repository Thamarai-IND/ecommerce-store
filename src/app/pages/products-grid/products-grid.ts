import { Component, effect, inject, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from "../../components/product-card/product-card";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList, MatListItemTitle } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce.store';
import { MatIcon } from "@angular/material/icon";
import { ToggleWishlistButton } from "../../components/toggle-wishlist-button/toggle-wishlist-button";


@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe, ToggleWishlistButton],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  category = input<string>('all');

  categories = signal<string[]>(['all', 'electronics', 'mobiles', 'computers', 'homeappliances', 'fitness']);

  store = inject(EcommerceStore);

  router = inject(Router);

  constructor() {
    // this.store.setCategory(this.category);
    effect(() => {
      this.store.setCategory(this.category());
    });
  }

  goToProduct(product: Product) {
    console.log("product data : ",product);
    this.router.navigate(['/product', product.id]);
  }

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
  }
}

