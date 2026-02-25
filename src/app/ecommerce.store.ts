import { computed, inject } from '@angular/core';
import { Product, products } from './models/product';
import { signalStore, withComputed, withMethods, withState, patchState, signalMethod } from '@ngrx/signals'

import {produce} from 'immer';
import { Toaster } from './services/toaster';
import { CartItem } from './models/cart';
export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItems: CartItem[];
}

export const EcommerceStore = signalStore(

  {
    providedIn: 'root'
  },
  withState<EcommerceState>({
    products: products,
    category: 'all',
    wishlistItems: [],
    cartItems: []
  }),

  withComputed(({category, products, wishlistItems, cartItems}) => ({
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
    wishlistCount: computed(() => wishlistItems().length),
    cartCount: computed(() => cartItems().reduce((total, item) => total + item.quantity, 0))
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
    },

    addToCart: (product: Product) => {
      
      const existingCartItem = store.cartItems().findIndex(item => item.product.id === product.id);
      
      if (existingCartItem !== -1) {
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          draft[existingCartItem].quantity += 1;
        });
        patchState(store, {cartItems: updatedCartItems});
      } else {
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          draft.push({ product, quantity: 1 });
        });
        patchState(store, {cartItems: updatedCartItems});
      }
      toaster.success(existingCartItem !== -1 ? 'Increased product quantity in cart' : 'Product added to cart');
    },

    settingItemQuantity(params: { productId: string, quantity: number }) {
      const index = store.cartItems().findIndex(item => item.product.id === params.productId);
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        if (index !== -1) {
          draft[index].quantity = params.quantity;
        }
      });
      patchState(store, {cartItems: updatedCartItems});
    },
   
    addAllWishlistToCart() {
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        store.wishlistItems().forEach(product => {
          if (!draft.find(item => item.product.id === product.id)) {
            draft.push({ product, quantity: 1 });
          }
        });
      });
      patchState(store, {cartItems: updatedCartItems, wishlistItems: []});
      toaster.success('All wishlist items added to cart')
    },

    moveToWishlist(product: Product) {
      const updatedCartItems = store.cartItems().filter(item => item.product.id !== product.id);
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        const cartItem = store.cartItems().find(item => item.product.id === product.id);
        if (cartItem && !draft.find(p => p.id === cartItem.product.id)) {
          draft.push(cartItem.product);
        }
      });
      patchState(store, {cartItems: updatedCartItems, wishlistItems: updatedWishlistItems});
      toaster.success('Product moved to wishlist')
    },

    removeFromCart: (product: Product) => {
      patchState(store, {
        cartItems: store.cartItems().filter(item => item.product.id !== product.id)
      });
      toaster.success('Product removed from cart')
    }
  }))
);
