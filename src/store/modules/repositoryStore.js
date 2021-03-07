

import service from "../../service/services/repositoriesService";

export default {
    state: {
        repositories: []
    },
    mutations: {
        updateRepositories(state, values) {
            state.repositories = values
        }
    },
    actions: {
        updateRepsitories(state, username) {
            service.getRepositories(username)
                .then((response) => {
                    if (response.status == 200) {
                        state.commit("updateRepositories", response.data);
                    }
                })
        }
    },
    getters: {
        repositories: state => {
            return state.repositories
        }
    }
}