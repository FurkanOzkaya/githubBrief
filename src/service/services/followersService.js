import axios from "../service"

export default {
    getFollowers(username) {
        return axios.get("/users/" + username + "/followers")
    }
}
