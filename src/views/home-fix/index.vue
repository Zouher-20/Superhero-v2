<template>
  <div class="home-container">
    <div class="first-section-cont">
      <div class="first-section">
        <div
          id="main-message"
          class="text-h2 white--text text-center font-weight-bold"
          style="line-height: 110px"
        >
          Start the plan that best suits you with SuperHeroes Community
        </div>
        <div
          id="sub-message"
          class="text-h6 mt-10 text-center"
          style="color: #c1c1c1"
        >
          Learn and chart your way towards your dream with core team members and
          <br />
          experts in several IT fields through the unique plans that feature our
          platform.
          <v-text-field
            outlined
            rounded
            label="Search Plan"
            class="radius mt-16 white--text"
            dark
            color="primary"
          />
        </div>
      </div>
    </div>
    <div id="plans" class="bg-dark">
      <v-container class="py-16">
        <div class="text-h4 white--text text-center mb-16 font-weight-bold">
          Some Of Our Awesome Plans
        </div>
        <div>
          <v-row>
            <v-col></v-col>
          </v-row>
        </div>
        <div>
          <v-row justify="center">
            <v-col cols="9" xs="4" md="10" lg="9" xl="6">
              <v-row class="my-7" v-if="plansLoading" justify="center">
                <v-progress-circular
                  :size="70"
                  :width="7"
                  color="white"
                  indeterminate
                ></v-progress-circular>
              </v-row>
              <v-row v-else>
                <v-col cols="12" md="6" lg="4" v-for="n in plansList" :key="n">
                  <router-link
                    class="text-link-none"
                    :to="`/plans/plan/${n.id}`"
                  >
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
        </div>
        <div>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn
                :to="'/plans'"
                large
                class="radius"
                elevation="0"
                block
                color="primary"
              >
                <span class="font-weight-bold" style="text-transform: none">
                  See All Our Plans
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div id="about" class="light">
      <v-container class="py-16">
        <div class="text-h2 text-center mb-8 my-16 font-weight-bold">
          About SuperHeroes Community
        </div>
        <div>
          <v-row justify="center">
            <v-col cols="9">
              <div class="text-h6 mt-10 text-justify">
                It is a platform that helps university students reach their
                goals and dreams by providing a simple plan that provides a
                step-by-step explanation to reach the goal by following up with
                doctors and consultants specialized in several information
                fields, including UI/UX Design Frontend Backend Mobile Dev... In
                addition to providing all university student lessons as a pdf
                file In the event that the student accomplished his tasks and
                the transition between the stages was quick and thoughtful The
                advisor or the doctor supervising the plan requests to meet the
                student in order to provide an opportunity for training or work
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <div class="">
        <v-img :src="bottomImg"></v-img>
      </div>
    </div>
    <div id="teams" class="bg-dark">
      <v-container class="py-16">
        <div class="text-h4 white--text text-center mb-16 font-weight-bold">
          Some of our Amazing Team
        </div>
        <div>
          <v-row>
            <v-col></v-col>
          </v-row>
        </div>
        <div>
          <v-row justify="center">
            <v-col cols="9" xs="4" md="10" lg="9" xl="6">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  lg="4"
                  v-for="(n, idx) in teams"
                  :key="idx"
                >
                  <team-card
                    v-if="true"
                    :title="n.title"
                    :discription="n.discription"
                    :image="
                      n.image
                        ? n.image
                        : 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    "
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div id="faq" class="bg-light">
      <v-container class="py-16">
        <div class="text-h4 white--text text-center mb-16 font-weight-bold">
          FAQ
        </div>
        <div>
          <v-row>
            <v-col></v-col>
          </v-row>
        </div>
        <div>
          <v-row justify="center">
            <v-col cols="12" md="9" lg="6">
              <v-expansion-panels accordion>
                <v-expansion-panel
                  class="my-2 radius faq-panel"
                  v-for="(item, i) in 5"
                  :key="i"
                >
                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi quaerat expedita consequatur? Reiciendis veniam hic
                    dignissimos sit velit ratione atque ipsam possimus expedita,
                    tenetur deserunt sint et, nisi aliquam perferendis!
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { teams } from "@/data/index.js";
import planCard from "../../components/plan-card.vue";
import teamCard from "../../components/team-card.vue";
import bottomImg from "@/assets/bottom-img.svg";
import axios from "axios";
export default {
  components: {
    planCard,
    teamCard,
  },
  data() {
    return {
      bottomImg,
      teams: teams,
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
  mounted() {
    const WelcomeFade = gsap
      .timeline({
        defaults: { duration: 1 },
      })
      .set("#main-message", { opacity: 0, top: -50 })
      .set("#sub-message", { opacity: 0, top: -50 })
      .to("#main-message", { opacity: 1, top: 0 })
      .to("#sub-message", { opacity: 1, top: 0 });

    WelcomeFade.restart();
  },
};
</script>

<style lang="scss">
#main-message {
  position: relative;
}
#sub-message {
  position: relative;
}

.home-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.first-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;

  background-image: url("../../assets/Hero.svg");
  background-size: cover;
  height: 100vh;
}
.second-section-cont {
  background-color: #090412;
}
.first-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.second-section {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.plan-cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.third-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #c0b1ff;
  height: 70vh;
}
.third-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.fourth-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #090412;
  height: 90vh;
}
.fourth-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.fifth-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #c0b1ff;
  height: 70vh;
}
.fifth-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.faq-cont {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.faq-panel {
  border: 1px solid #0f0a22;
  box-shadow: none !important;
}
.v-expansion-panels .v-expansion-panel {
  background-color: transparent !important;
}
.v-expansion-panel:not(:first-child)::after {
  border-top: none !important;
}
.v-expansion-panels > :first-child {
  border-radius: 16px;
}
.v-expansion-panels > :last-child {
  border-radius: 16px;
}
.text-link-none {
  text-decoration: none;
}
</style>
