import axios from "../service"

export default {
    getFollowings(username) {
        return axios.get("/users/" + username + "/following")
    }
}
