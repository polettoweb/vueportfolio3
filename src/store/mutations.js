export default {
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
}