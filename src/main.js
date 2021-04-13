import component from '@/components/setting';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(component);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
