

import service from "../../service/services/organizationsService";

export default {
    state: {
        organizations: []
    },
    mutations: {
        updateOrganizations(state, values) {
            state.organizations = values
        }
    },
    actions: {
        updateOrganizations(state, username) {
            service.getOrganizations(username)
                .then((response) => {
                    if (response.status == 200) {
                        state.commit("updateOrganizations", response.data);
                    }
                })
        }
    },
    getters: {
        organizations: state => {
            return state.organizations
        }
    }
}