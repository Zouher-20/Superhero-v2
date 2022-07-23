import Vue from "vue";
import Vuex from "vuex";
import Courses from "../views/courses/store";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Courses,
    app: {
      namespaced: true,
      mutations: {
        setUsers(state, payload) {
          state.users = payload;
        },
        setUser(state, payload) {
          state.user = payload;
        },
        login(state) {
          state.isLogin = true;
        },
      },
      state: {
        users: [],
        user: null,
        isLogin: false,
      },
      getters: {
        getUsers(state) {
          return state.users;
        },
        user(state) {
          return state.user;
        },
        isLogin(state) {
          return state.isLogin;
        },
      },
    },
  },
});
