import axios from 'axios'
export default {
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
    }
}