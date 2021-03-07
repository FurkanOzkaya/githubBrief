
export default {
    state: {
        username: ""
    },
    mutations: {
        updateUsername(state, value) {
            state.username = value
        }
    },
    actions: {
        updateUsername(state, username) {
            state.commit("updateUsername", username);

        }
    },
    getters: {
        username: state => {
            return state.username
        }
    }
}