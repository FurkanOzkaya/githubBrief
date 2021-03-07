<template>
  <div v-if="!repositoryName">
    <div class="info-message">Please select repository for display commits</div>
  </div>
  <div v-else>
    <div class="title">
      <b>Commits</b> <br />
      <p class="title_info">User has {{ commitCount }} Commits</p>
    </div>
    <v-expansion-panels inset>
      <v-expansion-panel v-for="data in datas" :key="data.sha">
        <v-expansion-panel-header>
          <v-row>
            <v-col md="9" class="commit-message">
              <span class="commit-message-title">Commit Message:</span>
              <br /><br />
              {{ data.commit.message }}
            </v-col>
            <v-col md="3">
              <v-list-item-avatar>
                <v-img
                  :alt="`${data.commit.author.name} avatar`"
                  :src="data.author.avatar_url"
                ></v-img>
              </v-list-item-avatar>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <v-row>
              <v-col>
                Author Name: {{ data.commit.author.name }} <br />
                Date: {{ data.commit.author.date }}
              </v-col>
              <v-col>
                <v-btn
                  icon
                  :href="data.html_url"
                  target="_blank"
                  color="#bbe1fa"
                >
                  <v-icon>fa-location-arrow</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Commits",
  data() {
    return {
      commitCount: 0,
      datas: undefined,
    };
  },
  computed: {
    ...mapState({
      commitsStore: (state) => state.commitsStore.commits,
      repositoryName: (state) => state.repoNameStore.repoName,
      usernameStore: (state) => state.usernameStore.username,
    }),
  },
  watch: {
    commitsStore() {
      this.datas = this.commitsStore;
      if (this.datas !== undefined) {
        this.commitCount = this.datas.length;
      }
    },
    repositoryName() {
      this.$store.dispatch("updateCommits");
    },
    usernameStore() {
      this.$store.commit("updateCommits", []);
      this.datas = undefined;
    },
  },
  mounted() {
    this.$store.dispatch("updateCommits");
  },
};
</script>

<style>
.commit-message {
  display: flex;
}
.commit-message-title {
  color: #3282b8;
}
.info-message {
  margin-top: 20%;
  font-size: 30px;
  color: #0f4c75;
}
</style>