import Vue from 'vue'
import Vuex from 'vuex'
import RepositoriesStore from './modules/repositoryStore'
import followingsStore from './modules/followingsStore'
import followersStore from './modules/followersStore'
import commitsStore from './modules/commitsStore'
import usernameStore from './modules/usernameStore'
import repoNameStore from './modules/repoNameStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        RepositoriesStore: RepositoriesStore,
        followersStore: followersStore,
        followingsStore: followingsStore,
        commitsStore: commitsStore,
        usernameStore: usernameStore,
        repoNameStore: repoNameStore
    }
})