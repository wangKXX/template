import Vue from 'vue';
import Vuex from 'vuex';
import modules from './setting';

Vue.use(Vuex);

console.log(modules);
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
});
