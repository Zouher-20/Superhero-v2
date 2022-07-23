<template>
  <div class="bgNew">
    <v-container v-if="stepLoading">
      <v-row class="px-2">
        <v-col cols="12"></v-col>
        <v-col class="12 py-2"></v-col>
      </v-row>
      <v-row justify="center" align="center" style="min-height: 50vh">
        <v-progress-circular
          :size="70"
          :width="7"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </v-container>
    <div v-else>
      <v-container class="pt-16">
        <v-row justify="center">
          <v-col cols="10">
            <v-row class="pt-12">
              <v-col cols="6">
                <v-row>
                  <v-col>
                    <h2 class="white--text text-h4">{{ step.name }}</h2>
                  </v-col>
                </v-row>

                <v-row class="pt-9">
                  <v-col>
                    <div class="d-flex align-center">
                      <v-btn
                        v-if="step.nextStepId.length > 0"
                        :to="`/plans/step/${step.nextStepId[0]['id']}`"
                        x-large
                        class="radius me-5"
                        elevation="0"
                        color="primary"
                      >
                        <span
                          class="font-weight-bold px-9 py-3"
                          style="text-transform: none"
                        >
                          Next Step
                        </span>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row justify="end">
                  <v-col cols="9">
                    <div class="white--text mt-9">
                      Download the file for this stage
                      <a
                        href=""
                        class="link-no-dir"
                        :download="step.downloadFile"
                      >
                        <v-btn icon target="blank"
                          ><v-icon color="light">mdi-download</v-icon></v-btn
                        >
                      </a>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pb-16">
        <v-row justify="center" class="pt-lg-16">
          <v-col cols="9" xs="4" md="10" lg="9" xl="6" class="pt-lg-16">
            <v-row>
              <v-col cols="12" md="6" lg="4"> </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pb-16">
        <v-row justify="center" class="pt-xl-16">
          <v-col cols="9" xs="4" md="10" lg="9" xl="8">
            <div class="white--text" v-html="step.description"></div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="!step.nextStepId.length > 0" class="pb-16">
        <v-row justify="center">
          <v-col cols="9" xs="4" md="10" lg="9" xl="8">
            <div class="white--text pt-7">
              <v-btn
                :to="`/plans`"
                x-large
                class="radius me-5"
                elevation="0"
                color="primary"
              >
                <span
                  class="font-weight-bold px-9 ps-4 py-3"
                  style="text-transform: none"
                >
                  <v-icon>mdi-arrow-left</v-icon> Get New Plan
                </span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      stepId: 1,
      step: {},
      stepLoading: false,
    };
  },
  watch: {
    $route: "routeChange",
  },
  methods: {
    routeChange() {
      this.stepId = this.$route.params["stepId"];
      this.fetchPlan();
    },
    async fetchPlan() {
      this.stepLoading = true;
      try {
        let res = await axios.get(
          `http://shopware5.skyfy.me/assets/lms/public/api/step/${this.stepId}`
        );
        this.step = res.data.data;
        this.stepLoading = false;
      } catch (err) {
        console.log(err);
        this.stepLoading = false;
      }
    },
  },
  created() {
    this.routeChange();
  },
};
</script>
<style scoped>
.bgNew {
  background-image: url("@/assets/Background.svg");
  background-size: contain;
}

.mg-t-100 {
  margin-top: 20% !important;
  padding: 0 10%;
}

.w-100 {
  width: 100%;
}
.link-no-dir {
  text-decoration: none;
}
</style>
