
export default {
    state: {
        repoName: ""
    },
    mutations: {
        updateRepoName(state, value) {
            state.repoName = value
        }
    },
    actions: {
        updateRepoName(state, repoName) {
            state.commit("updateRepoName", repoName);

        }
    },
    getters: {
        repoName: state => {
            return state.repoName
        }
    }
}