import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_COUNTER,
  ADD_TO_CART
} from '@/store/mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    [ADD_COUNTER](state, payload) {
      payload.count++;
    },
    [ADD_TO_CART](state, payload) {
      payload.checked = true;
      payload.count = 1;
      state.cartList.push(payload);
    }

  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(
          item => item.iid === payload.iid
        );
        if (oldProduct) {
          context.commit(ADD_COUNTER, oldProduct);
          resolve("Current item+1");
        } else {
          context.commit(ADD_TO_CART, payload);
          resolve("Successfully add item to cart");
        }
      });
    }
  },
  modules: {
  },
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    }
  }
});

export default store;

