import vuex from 'vuex';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  isLogin: false,
  isRegistered: false
  //要设置的初始属性值
};

const store = new Vuex.Store({
  state
});

export default store;
