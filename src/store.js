import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSideBarOpen: false,
    portfolioItems: null,
    workshopItems: null,
    expDetails: null,
    skillsLines: null,
    skillsTopics: null,
    blog: null,
    baseApiUrl: "https://www.marcopoletto.eu/api/v1/"
  },
  mutations: {
    setPortfolio(state, payload) {
      state.portfolioItems = payload;
    },
    setWorkshop(state, payload) {
      state.workshopItems = payload;
    },
    setResume(state, payload) {
      state.expDetails = payload[0];
      state.skillsLines = payload[1];
      state.skillsTopics = payload[2];
    },
    setBlog(state, payload) {
      state.blog = payload;
    },
    externalInteractMenu(state) {
      state.isSideBarOpen = !state.isSideBarOpen;
    }
  },
  actions: {
    async getPortfolio({ state, commit }) {
      try {
        let response = await axios.get(`${state.baseApiUrl}portfolio`)
        commit('setPortfolio', response.data.content)
      } catch (error) {
        commit('setPortfolio', []);
      }
    },
    async getWorkshop({ state, commit }) {
      try {
        let response = await axios.get(`${state.baseApiUrl}workshop`)
        commit('setWorkshop', response.data.content)
      } catch (error) {
        commit('setWorkshop', []);
      }
    },
    async getResume({ state, commit }) {
      try {
        let response = await axios.get(`${state.baseApiUrl}resume`)
        commit('setResume', response.data.content)
      } catch (error) {
        commit('setResume', []);
      }
    },
    async getBlog({ state, commit }) {
      try {
        let response = await axios.get(`${state.baseApiUrl}blog`)
        commit('setBlog', response.data.content)
      } catch (error) {
        commit('setBlog', []);
      }
    }
  }
});
