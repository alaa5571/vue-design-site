import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false
  },
  mutations: {
    changeDarkMode(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
    fireChangeDarkMode(context) {
      context.commit("changeDarkMode");
    }
  },
  modules: {}
});
