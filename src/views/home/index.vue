<template>
  <div class="home-container">
    <div class="first-section-cont">
      <div class="first-section">
        <div
          class="text-h2 white--text text-center font-weight-bold"
          style="line-height: 110px"
        >
          Start the plan that best suits you with SuperHeroes Community
        </div>
        <div class="text-h6 mt-10 text-center" style="color: #c1c1c1">
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
    <div class="second-section-cont">
      <div class="second-section">
        <div class="text-h4 white--text text-center mb-16 font-weight-bold">
          Some Of Our Awesome Plans
        </div>
        <div class="justify-center plan-cont">
          <plan-card
            style="width: 33%"
            v-for="n in 6"
            :key="n"
            level="beginner"
            title="hamza"
            discription="The academic qualification for this subject is the basics of programming"
            image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div class="d-flex justify-center">
          <v-btn large class="radius" width="50%" elevation="0" color="primary">
            <span class="font-weight-bold" style="text-transform: none">
              See All Our Plans
            </span>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="third-section-cont">
      <div class="third-section pt-16">
        <div class="text-h2 text-center mb-8 mt-16 font-weight-bold">
          About SuperHeroes Community
        </div>
        <div class="text-h6 mt-10 text-center">
          It is a platform that helps university students reach their goals and
          dreams by providing a simple plan that provides a step-by-step
          explanation to reach the goal by following up with doctors and
          consultants specialized in several information fields, including UI/UX
          Design Frontend Backend Mobile Dev... In addition to providing all
          university student lessons as a pdf file In the event that the student
          accomplished his tasks and the transition between the stages was quick
          and thoughtful The advisor or the doctor supervising the plan requests
          to meet the student in order to provide an opportunity for training or
          work
        </div>
      </div>
    </div>
    <div class="fourth-section-cont">
      <div class="fourth-section">
        <div class="text-h4 white--text text-center my-8 font-weight-bold">
          Some of our Amazing Team
        </div>
        <div class="justify-center plan-cont">
          <team-card
            v-for="n in 6"
            :key="n"
            title="hamza"
            subtitle="frontend dev"
            image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
    </div>
    <div class="fifth-section-cont">
      <div class="fifth-section">
        <div class="text-h4 text-center my-8 font-weight-bold">FAQ</div>
        <div class="justify-center faq-cont">
          <v-expansion-panels accordion>
            <v-expansion-panel
              class="my-2 radius faq-panel"
              v-for="(item, i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import planCard from "../../components/plan-card.vue";
import teamCard from "../../components/team-card.vue";
export default {
  components: {
    planCard,
    teamCard,
  },
};
</script>

<style lang="scss">
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
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #090412;
  height: 120vh;
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
</style>
