<template>
  <div v-if="followers && followings">
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="#1b262c" dark>
        <v-toolbar-title>Followers</v-toolbar-title>
      </v-toolbar>

      <v-list subtitle>
        <v-list-item-subtitle
          >User has {{ followerCount }} follower</v-list-item-subtitle
        >
        <v-virtual-scroll :items="followers" height="300" item-height="64">
          <template v-slot:default="{ item }">
            <v-list-item :key="item.id">
              <v-list-item-avatar>
                <v-img
                  :alt="`${item.login} avatar`"
                  :src="item.avatar_url"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item v-text="item.login"> </v-list-item>
              </v-list-item-content>

              <v-btn icon :href="item.html_url" target="_blank" color="#bbe1fa">
                <v-icon>fa-location-arrow</v-icon>
              </v-btn>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>

      <v-divider></v-divider>
      <v-toolbar color="#1b262c" dark>
        <v-toolbar-title>Following</v-toolbar-title>
      </v-toolbar>
      <v-list subtitle>
        <v-list-item-subtitle
          >Following {{ followingCount }} user</v-list-item-subtitle
        >
        <v-virtual-scroll :items="followings" height="300" item-height="64">
          <template v-slot:default="{ item }">
            <v-list-item :key="item.id">
              <v-list-item-avatar>
                <v-img
                  :alt="`${item.login} avatar`"
                  :src="item.avatar_url"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.login"></v-list-item-title>
              </v-list-item-content>
              <v-btn icon :href="item.html_url" target="_blank" color="#bbe1fa">
                <v-icon>fa-location-arrow</v-icon>
              </v-btn>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Contacts",
  data() {
    return {
      followers: null,
      followings: null,
      followerCount: null,
      followingCount: null,
    };
  },
  computed: {
    ...mapState({
      followersStore: (state) => state.followersStore.followers,
      followingsStore: (state) => state.followingsStore.followings,
      usernameStore: (state) => state.usernameStore.username,
    }),
  },
  watch: {
    followersStore() {
      this.followers = this.followersStore;
      if (this.followers !== null) {
        this.followerCount = this.followers.length;
      }
    },
    followingsStore() {
      this.followings = this.followingsStore;
      if (this.followings !== null) {
        this.followingCount = this.followings.length;
      }
    },
    usernameStore() {
      if (this.usernameStore) {
        let username = this.usernameStore;
        this.$store.dispatch("updateRepsitories", username);
      }
    },
  },
  mounted() {},
};
</script>

<style>
</style>