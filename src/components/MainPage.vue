<template>
  <div>
    <div class="main-title"><b>Github Brief</b></div>
    <div class="entered-username" v-if="storeUsername">
      <b>User: {{ storeUsername }}</b>
    </div>
    <v-row class="username-input">
      <v-spacer></v-spacer>
      <v-text-field
        label="Username"
        placeholder="Example (furkanozkaya)"
        filled
        rounded
        dense
        width="100"
        v-model="username"
        @keyup.enter="changeUsername()"
      ></v-text-field>
      <v-btn
        icon
        @click="changeUsername()"
        style="margin-top: 5px; color: #0f4c75"
      >
        <v-icon large>fa-chevron-circle-right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-row>
    <v-row v-if="errorCode === 2" class="username-not-exist">
      Please Write Available Github Username
    </v-row>
    <v-container v-if="errorCode === 0">
      <v-row>
        <v-col class="col-sm-9 col-12 col-md-2"><repositories /></v-col>
        <v-col class="col-sm-9 col-12 col-md-8"><commits /></v-col>
        <v-col class="col-sm-9 col-12 col-md-2"><contacts /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Repositories from "./Repositories";
import Contacts from "./Contacts";
import Commits from "./ListCommits";
import { mapState } from "vuex";
import axios from "../service/service";

export default {
  name: "MainPage",
  components: {
    Repositories,
    Contacts,
    Commits,
  },
  computed: {
    ...mapState({
      usernameStore: (state) => state.usernameStore.username,
    }),
  },
  data() {
    return {
      data: null,
      username: "",
      storeUsername: "",
      errorCode: 1,
    };
  },
  methods: {
    changeUsername() {
      this.checkUser(this.username);
    },
    checkUser(username) {
      axios
        .get("/users/" + username + "/repos")
        .then((response) => {
          if (response.status == 200) {
            this.errorCode = 0;
            this.$store.dispatch("updateUsername", this.username);
            this.$store.dispatch("updateRepoName", "");
            this.$store.dispatch("updateFollowers", username);
            this.$store.dispatch("updateFollowings", username);
            this.$store.dispatch("updateRepsitories", username);
          }
        })
        .catch(() => {
          this.errorCode = 2;
        });
    },
  },
  watch: {
    usernameStore() {
      this.storeUsername = this.usernameStore;
    },
  },
};
</script>

<style scoped>
.col {
  flex-basis: 1;
  flex-grow: 1;
  max-width: 100%;
}
.main-title {
  font-size: 35px;
  color: #1b262c;
}
.username-input {
  margin-top: 5%;
}
.entered-username {
  float: left;
  font-size: 25px;
  margin-left: 2%;
}
.username-not-exist {
  font-size: 30px;
  display: flex;
  justify-content: center;
}
</style>