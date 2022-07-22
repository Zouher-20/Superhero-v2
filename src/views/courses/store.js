import axios from "../../axios";

export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async getItems({ commit }) {
      const x = await axios
        .get("http://shopware5.skyfy.me/assets/lms/public/api/courses")
        .then((response) => response.data);
      commit("setItems", x.data);
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
  },
};
