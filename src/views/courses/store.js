import axios from "../../axios";
export default {
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    setItems(state, payload) {
      state.item = payload;
    },
  },
  actions: {
    getItems({ commit }) {
      const x = axios.get("").then((response) => response.data);
      commit("setItems", x);
    },
  },
};
