<template>
  <div class="repositories">
    <div class="title">
      <b>Repsositories</b> <br />
      <p class="title_info">User has {{ repoCount }} Repositories</p>
    </div>
    <v-expansion-panels popout v-model="expanded">
      <v-expansion-panel v-for="data in repoData" :key="data.id">
        <v-expansion-panel-header>
          <div class="name">{{ data["name"] }}</div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col md="8">
              <div class="description">
                <div>
                  Description: <br /><br />
                  {{ data["description"] }}
                </div>
              </div>
            </v-col>
            <v-col md="4" class="repo-icon">
              <v-row>
                <v-btn
                  icon
                  :href="data['html_url']"
                  target="_blank"
                  color="#bbe1fa"
                >
                  <v-icon>fa-location-arrow</v-icon>
                </v-btn>
              </v-row>
              <v-row>
                <v-btn icon @click="calculate(data['name'])" color="#bbe1fa">
                  <v-icon>fa-chevron-circle-right</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
          <div class="dates">
            <div class="create_date">Create Date: {{ data["created_at"] }}</div>
            <div class="update_date">Update Date: {{ data["updated_at"] }}</div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "ListRepositories",
  props: ["datas"],
  data() {
    return {
      repoData: this.datas,
      repoCount: 0,
      expanded: [],
    };
  },
  created() {
    this.repoCount = this.repoData.length;
  },
  methods: {
    calculate(repoName) {
      this.$store.dispatch("updateRepoName", repoName);
    },
  },
  watch: {
    datas: function (newVal) {
      this.repoData = newVal;
      this.expanded = [];
    },
    repoData() {
      this.repoCount = this.repoData.length;
    },
  },
};
</script>

<style>
* {
  font-family: serif;
}
.title {
  font-size: 20px;
  margin: 7%;
}
.title_info {
  font-size: 18px;
}
.name {
  font-size: 18px;
}
.description {
  text-align: left;
}
.dates {
  float: right;
  font-size: 12px;
  padding-top: 15px;
  text-align: left;
}
.repo-icon {
  right: 3%;
}
.v-expansion-panels {
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
  z-index: 1;
}
</style>