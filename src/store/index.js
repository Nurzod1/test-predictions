import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const $https = axios.create({
  baseURL: "https://swapi.dev/api",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    fetchUser({ commit }, id) {
      return new Promise((resolve, reject) => {
        $https
          .get("/people/" + id)
          .then(({ data }) => {
            commit("SET_USER", data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});

