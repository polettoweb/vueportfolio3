import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSideBarOpen: false,
    portfolioItems: null,
    portfolioItem: null,
    workshopItems: null,
    expDetails: null,
    skillsLines: null,
    skillsTopics: null,
    blog: null,
    single: null,
    baseApiUrl: "https://www.marcopoletto.eu/api/v1/"
  },
  mutations: {
    setPortfolio(state, payload) {
      state.portfolioItems = payload;
    },
    setPortfolioItem(state, payload) {
      state.portfolioItem = payload.res.filter(el => el.path === payload.brand)[0]
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
    setSingle(state, payload) {
      state.single = payload.res.filter(el => el.slug === payload.slug)[0]
    },
    externalCloseMenu(state) {
      state.isSideBarOpen = false;
    },
    externalOpenMenu(state) {
      state.isSideBarOpen = true;
    }
  },
  actions: {
    async getPortfolio({ state, commit }) {
      try {
        const response = await axios.get(`${state.baseApiUrl}portfolio`)
        commit('setPortfolio', response.data.content)
      } catch (error) {
        commit('setPortfolio', []);
      }
    },
    async getPortfolioItem({ state, commit }, brand) {
      try {
        const response = await axios.get(`${state.baseApiUrl}portfolio`)
        commit('setPortfolioItem', {
          res: response.data.content,
          brand: brand
        })
      } catch (error) {
        commit('setPortfolioItem', []);
      }
    },
    async getWorkshop({ state, commit }) {
      try {
        const response = await axios.get(`${state.baseApiUrl}workshop`)
        commit('setWorkshop', response.data.content)
      } catch (error) {
        commit('setWorkshop', []);
      }
    },
    async getResume({ state, commit }) {
      try {
        const response = await axios.get(`${state.baseApiUrl}resume`)
        commit('setResume', response.data.content)
      } catch (error) {
        commit('setResume', []);
      }
    },
    async getBlog({ state, commit }) {
      try {
        const response = await axios.get(`${state.baseApiUrl}blog`)
        commit('setBlog', response.data.content)
      } catch (error) {
        commit('setBlog', []);
      }
    },
    async getSingle({ state, commit }, slug) {
      try {
        const response = await axios.get(`${state.baseApiUrl}blog`)
        commit('setSingle', {
          res: response.data.content,
          slug: slug
        })
      } catch (error) {
        commit('setSingle', []);
      }
    },
  }
});
