import Vue from 'vue'
import App from './App.vue'

import store from "./store";
import router from "./router";

import ApiService from "./common/api.service";
import { TableComponent, TableColumn } from 'vue-table-component';

Vue.component('table-component', TableComponent);
Vue.component('table-column', TableColumn);

Vue.config.productionTip = false

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
