import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },

    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      api.post("/usuario", payload);
    }
  },
  modules: {}
});
