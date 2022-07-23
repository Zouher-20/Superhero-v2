<template>
  <div class="bgNew">
    <v-container v-if="planLoading">
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
      <v-container class="pt-6">
        <v-row justify="center">
          <v-col cols="12" lg="11" xl="9">
            <v-row class="pt-12">
              <v-col cols="6">
                <v-row>
                  <v-col>
                    <h2 class="white--text text-h4">{{ plan.name }}</h2>
                  </v-col>
                </v-row>

                <v-row class="pt-9">
                  <v-col>
                    <div class="d-flex align-center">
                      <v-btn
                        v-if="plan.first_step"
                        :to="`/plans/step/${plan.first_step['id']}`"
                        x-large
                        class="radius me-5"
                        elevation="0"
                        color="primary"
                      >
                        <span
                          class="font-weight-bold px-9 py-3"
                          style="text-transform: none"
                        >
                          Start Plan
                        </span>
                      </v-btn>

                      <v-card-subtitle class="white--text d-flex items-center">
                        <v-icon class="mr-2" color="grey">mdi-clock</v-icon>
                        <div>{{ plan.hours }}hr</div>
                      </v-card-subtitle>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="py-0 px-0" cols="6">
                <v-row class="py-0 px-0" justify="end">
                  <v-col class="py-0 px-0" cols="9">
                    <v-row class="py-0 px-0" justify="end">
                      <v-col class="py-0 px-0" cols="auto">
                        <v-img
                          width="300"
                          contain
                          :src="
                            plan.media[0]['url']
                              ? plan.media[0]['url']
                              : planImg
                          "
                        >
                        </v-img>
                      </v-col>
                    </v-row>
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
        <v-row justify="center">
          <v-col cols="9" xs="4" md="10" lg="9" xl="8">
            <div class="white--text pt-7" v-html="plan.description"></div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="!plan.first_step" class="pb-16">
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
import planImg from "@/assets/plan-img.png";
import axios from "axios";
export default {
  data() {
    return {
      planImg,
      planId: 1,
      plan: {},
      planLoading: false,
    };
  },
  methods: {
    async fetchPlan() {
      this.planLoading = true;
      try {
        let res = await axios.get(
          `http://shopware5.skyfy.me/assets/lms/public/api/plans/${this.planId}`
        );
        this.plan = res.data.data;
        this.planLoading = false;
      } catch (err) {
        console.log(err);
        this.planLoading = false;
      }
    },
  },
  created() {
    this.planId = this.$route.params["planId"];
    this.fetchPlan();
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
</style>
