import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const ApiService = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = "http://localhost:3000";
  },

  get(resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;