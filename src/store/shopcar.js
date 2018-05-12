import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const shopcar = new Vuex.Store({
  state: {
    total: {
      price: 0,
      discount: 0,
      amount: 0
    },
    goods: []  // itemId,itemName,price,amount,
  },
  mutations: {
    increment: (state) => {
      const obj = state;
      obj.count += 1;
    },
    decrement: (state) => {
      const obj = state;
      obj.count -= 1;
    }
  }
});

export default shopcar;
