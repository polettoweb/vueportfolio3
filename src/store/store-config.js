import actions from './actions'
import mutations from './mutations'

const state = {
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
}

export default {
    state,
    actions,
    mutations
}