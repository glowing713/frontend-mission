import { createStore } from 'vuex';
import items from './CartData';

export default createStore({
  state: {
    cartItems: [],
  },
  getters: {
    cartItemCount(state) {
      return state.cartItems.length;
    },
    checkedItems: (state) => (check) => state.cartItems.filter((e) => check.includes(e.product_no)),
  },
  mutations: {
    setCartItems(state) {
      state.cartItems = items;
    },
    delCartItem(state, id) {
      state.cartItems = state.cartItems.filter((el) => el.product_no !== id);
    },
  },
});
