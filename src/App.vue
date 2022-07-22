<template>
  <v-app class="dark">
    <v-app-bar class="px-16 shadow-0" elevation="0" app color="dark2">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-6"
          contain
          :src="require('./assets/logo.svg')"
          transition="scale-transition"
          width="190"
        />
        <!-- <div class="white--text text-h5">
          <span>Super</span><span class="primary--text">Heroes</span>
        </div> -->
      </div>

      <v-tabs
        class="mx-16"
        slider-color="primary"
        sliderSize="4"
        fixed-tabs
        background-color="transparent"
        dark
      >
        <v-tab @click="$router.push('/')"> Home </v-tab>
        <v-tab> Plans </v-tab>
        <v-tab @click="$router.push('courses')"> Courses </v-tab>
        <v-tab> About </v-tab>
        <v-tab @click="$router.push('team')"> Team </v-tab>
        <v-tab> FAQ </v-tab>
      </v-tabs>
      <v-btn
        outlined
        class="white--text radius px-6"
        @click="$router.push({ name: 'sign-up' })"
      >
        Sign Up
      </v-btn>
    </v-app-bar>

    <v-main class="light">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <div style="height: 37vh">
      <div class="footer light">
        <div
          class="d-flex items-center justify-between"
          style="
            width: 80%;
            align-items: center;
            justify-content: space-between;
          "
        >
          <img
            alt="Vuetify Logo"
            class="mr-6"
            :src="require('./assets/logo.svg')"
            transition="scale-transition"
            width="220"
            height="220"
          />
          <div class="d-flex">
            <span class="mx-10 text-h6 footer-link" href="">Plans</span>
            <span class="mx-10 text-h6 footer-link" href="">Courses</span>
            <span class="mx-10 text-h6 footer-link" href="">About</span>
            <span class="mx-10 text-h6 footer-link" href="">Teams</span>
            <span class="mx-10 text-h6 footer-link" href="">FAQ</span>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;500;700&display=swap");
@import "./style/global.scss";
// ll
* {
  font-family: "Cairo", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.footer {
  background-image: url("./assets/courses/footer.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
  bottom: 0px;
  width: 100%;
}
.footer-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    text-decoration: underline;
    color: #6546ed;
  }
}
</style>
