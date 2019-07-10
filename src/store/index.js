import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    isLogined: false,
    isSigined: false
};

export default new Vuex.Store({
    state
});