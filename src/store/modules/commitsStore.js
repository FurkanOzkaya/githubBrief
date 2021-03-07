

import service from "../../service/services/commitsService";

export default {
    state: {
        commits: []
    },
    mutations: {
        updateCommits(state, values) {
            state.commits = values
        }
    },
    actions: {
        updateCommits(state) {
            let username = state.rootState.usernameStore.username;
            let repoName = state.rootState.repoNameStore.repoName;
            if (username && repoName) {
                service.getCommits(username, repoName)
                    .then((response) => {
                        if (response.status == 200) {
                            state.commit("updateCommits", response.data);
                        }
                    })
            }
        }
    },
    getters: {
        commits: state => {
            return state.commits
        }
    }
}