<template>
  <div class="bgNew">
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-row>
            <v-col class="mt-12">
              <h2 class="white--text text-h4 text-lg-h3 pt-16">
                Awesome Plans Just For You
              </h2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pb-16" style="padding-top: 300px">
      <v-row justify="center">
        <v-col cols="9" xs="4" md="10" lg="9" xl="6">
          <v-row v-if="plansLoading" justify="center">
            <v-progress-circular
              :size="70"
              :width="7"
              color="white"
              indeterminate
            ></v-progress-circular>
          </v-row>
          <v-row v-else>
            <v-col cols="12" md="6" lg="4" v-for="n in plansList" :key="n">
              <router-link class="text-link-none" :to="`/plans/plan/${n.id}`">
                <plan-card
                  :level="n.level_name"
                  :title="n.name"
                  :image="n.media[0]['url']"
                  :hours="n.hours"
                />
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { plans } from "@/data/index.js";
import planCard from "@/components/plan-card.vue";
import axios from "axios";
export default {
  components: {
    planCard,
  },
  data() {
    return {
      cards: plans,
      plansList: [],
      plansLoading: false,
    };
  },
  methods: {
    async fetchPlans() {
      this.plansLoading = true;
      try {
        let res = await axios.get(
          "http://shopware5.skyfy.me/assets/lms/public/api/plans"
        );
        this.plansList = res.data.data;
        this.plansLoading = false;
      } catch (err) {
        console.log(err);
        this.plansLoading = false;
      }
    },
  },
  created() {
    this.fetchPlans();
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
a.text-link-none {
  text-decoration: none;
}
a.text-link-none:hover {
  text-decoration: none;
}
</style>
