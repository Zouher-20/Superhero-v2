<template>
  <v-app>
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
        <v-tab @click="$router.push('/home')"> Home </v-tab>
        <v-tab> Plans </v-tab>
        <v-tab @click="$router.push('courses')"> Courses </v-tab>
        <v-tab> About </v-tab>
        <v-tab> Team </v-tab>
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;500;700&display=swap");
@import "./style/global.scss";

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
</style>
