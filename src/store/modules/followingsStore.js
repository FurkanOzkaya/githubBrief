

import service from "../../service/services/followingService";

export default {
    state: {
        followings: []
    },
    mutations: {
        updateFollowings(state, values) {
            state.followings = values
        }
    },
    actions: {
        updateFollowings(state, username) {
            service.getFollowings(username)
                .then((response) => {
                    if (response.status == 200) {
                        state.commit("updateFollowings", response.data);
                    }
                })
        }
    },
    getters: {
        followings: state => {
            return state.followings
        }
    }
}