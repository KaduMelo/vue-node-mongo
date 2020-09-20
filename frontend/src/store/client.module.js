import ApiService from "@/common/api.service";
import {
  FETCH_CLIENTS
} from "./actions.type";
import { SET_CLIENTS, SET_ERROR } from "./mutations.type";

const state = {
  errors: {},
  clients: []
};

const getters = {
  clients(state) {
    return state.clients;
  }
};

const actions = {
  [FETCH_CLIENTS](context, payload) {
    const { username } = payload;
    return ApiService.get("clients", username)
      .then(({ data }) => {
        context.commit(SET_CLIENTS, data.clients);
        return data;
      })
      .catch(({ data }) => {
        context.commit(SET_ERROR, data.errors)
      });
  }
};

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_CLIENTS](state, clients) {
    state.clients = clients;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};