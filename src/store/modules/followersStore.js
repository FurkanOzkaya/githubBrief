

import service from "../../service/services/followersService";

export default {
    state: {
        followers: []
    },
    mutations: {
        updateFollowers(state, values) {
            state.followers = values
        }
    },
    actions: {
        updateFollowers(state, username) {
            service.getFollowers(username)
                .then((response) => {
                    if (response.status == 200) {
                        state.commit("updateFollowers", response.data);
                    }
                })
        }
    },
    getters: {
        followers: state => {
            return state.followers
        }
    }
}