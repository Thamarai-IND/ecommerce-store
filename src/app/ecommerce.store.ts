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

  // This section defines the methods that will be used to manipulate the state of the store. Each method is responsible for updating a specific part of the state, such as adding or removing items from the wishlist or cart, setting the category, etc. The methods use Immer's produce function to create new state objects based on the current state, ensuring immutability. Additionally, they use a toaster service to show success messages when actions are performed.
  withMethods((store, toaster = inject(Toaster)) => ({
    
    // This method updates the category in the state. It takes a category string as an argument and uses the patchState function to update the category property in the store's state.
    setCategory(category: string) {
      patchState(store, { category });
    },

    // This method adds a product to the wishlist. It uses Immer's produce function to create a new wishlist items array. If the product is not already in the wishlist, it adds it to the array. Finally, it patches the state with the updated wishlist items and shows a success message using the toaster service.
    addToWishlist: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
        if(!draft.find(p => p.id === product.id)) {
          draft.push(product);
        }
      });

      patchState(store, {wishlistItems: updatedWishlistItems});
      toaster.success('Product added to wishlist')
    },

    // This method removes a product from the wishlist. It filters out the product with the matching ID from the wishlist items and updates the state. After removing the product, it shows a success message using the toaster service.
    removeFromWishlist: (product: Product) => {
      patchState(store, {
        wishlistItems: store.wishlistItems().filter(p => p.id !== product.id)
      });
      toaster.success('Product removed from wishlist')
    },

    clearWishlist: () => {
      patchState(store, {wishlistItems: []})
    },

    // This method adds a product to the cart. It first checks if the product already exists in the cart by finding its index. If it exists, it uses Immer's produce function to create a new cart items array where the quantity of that item is increased by 1. If it doesn't exist, it creates a new cart items array with the new product added with a quantity of 1. Finally, it patches the state with the updated cart items and shows a success message.
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

    // This method updates the quantity of a specific product in the cart. It first finds the index of the cart item that matches the given product ID. Then, it uses Immer's produce function to create a new cart items array where the quantity of the specified item is updated. Finally, it patches the state with the updated cart items.
    settingItemQuantity(params: { productId: string, quantity: number }) {
      const index = store.cartItems().findIndex(item => item.product.id === params.productId);
      const updatedCartItems = produce(store.cartItems(), (draft) => {
        if (index !== -1) {
          draft[index].quantity = params.quantity;
        }
      });
      patchState(store, {cartItems: updatedCartItems});
    },
   
    // This method adds all items from the wishlist to the cart. It uses Immer's produce function to create a new cart items array that includes all existing cart items plus any wishlist items that are not already in the cart. After updating the cart, it clears the wishlist and shows a success message.
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

    // This method moves a product from the cart to the wishlist. It first removes the product from the cart and then adds it to the wishlist if it's not already there. Finally, it shows a success message.
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

    // This method removes a product from the cart. It filters out the cart item with the matching product ID and updates the state. After removing the product, it shows a success message using the toaster service.
    removeFromCart: (product: Product) => {
      patchState(store, {
        cartItems: store.cartItems().filter(item => item.product.id !== product.id)
      });
      toaster.success('Product removed from cart')
    }
  }))
);
