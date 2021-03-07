<template>
  <div v-if="datas" class="respositories">
    <list-repositories :datas="datas" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListRepositories from "./ListRepositories";

export default {
  name: "Repositories",
  props: ["username"],
  components: {
    ListRepositories,
  },
  data() {
    return {
      datas: "",
    };
  },
  computed: {
    ...mapState({
      repositoryData: (state) => state.RepositoriesStore.repositories,
      usernameStore: (state) => state.usernameStore.username,
    }),
  },
  mounted() {},
  watch: {
    repositoryData() {
      this.datas = this.repositoryData;
    },
    usernameStore() {
      this.datas = [];
      if (this.usernameStore) {
        let username = this.usernameStore;
        this.$store.dispatch("updateRepsitories", username);
      }
    },
  },
};
</script>

<style>
</style>