import axios from "../service"

export default {
    getRepositories(username) {
        return axios.get("/users/" + username + "/repos")
    }
}