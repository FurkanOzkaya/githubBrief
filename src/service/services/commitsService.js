import axios from "../service"

export default {
    getCommits(username, repo) {
        return axios.get("/repos/" + username + "/" + repo + "/commits")
    }
}
