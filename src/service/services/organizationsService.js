import axios from "../service"

export default {
    getOrganizations(username) {
        return axios.get("/users/" + username + "/orgs")
    }
}
