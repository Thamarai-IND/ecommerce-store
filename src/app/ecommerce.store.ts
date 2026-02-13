import { computed, inject } from '@angular/core';
import { Product, products } from './models/product';
import { signalStore, withComputed, withMethods, withState, patchState, signalMethod } from '@ngrx/signals'

import {produce} from 'immer';
import { Toaster } from './services/toaster';
export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
}

export const EcommerceStore = signalStore(

  {
    providedIn: 'root'
  },
  withState<EcommerceState>({
    products: products,
    category: 'all',
    wishlistItems: []
  }),

  withComputed(({category, products, wishlistItems}) => ({
    filteredProducts: computed(() => {
      const cat = category().toLowerCase();

      // Show all products
      if (cat === 'all') {
        return products();
      }

      // Map 'electronics' to show tech-related categories
      if (cat === 'electronics') {
        return products().filter((p: Product) =>
          ['mobiles', 'computers'].includes(p.category.toLowerCase())
        );
      }

      // Filter by exact category match
      return products().filter((p: Product) => p.category.toLowerCase() === cat);
    }),
    wishlistCount: computed(() => wishlistItems().length)
  })),

  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory(category: string) {
      patchState(store, { category });
    },

    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if(!draft.find(p => p.id === product.id)) {
          draft.push(product);
        }
      });

      patchState(store, {wishlistItems: updatedWishlistItems});
      toaster.success('Product added to wishlist')
    },

    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter(p => p.id !== product.id)
      });
      toaster.success('Product removed from wishlist')
    },

    clearWishlist: () => {
      patchState(store, {wishlistItems: []})
    }
  }))
);
