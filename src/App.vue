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
          width="30"
        />
        <div class="white--text text-h5">
          <span>super</span><span class="primary--text">Heroes</span>
        </div>
      </div>

      <v-tabs
        class="mx-16"
        slider-color="primary"
        sliderSize="4"
        fixed-tabs
        background-color="transparent"
        dark
      >
        <v-tab> Home </v-tab>
        <v-tab> Plans </v-tab>
        <v-tab> Courses </v-tab>
        <v-tab> About </v-tab>
        <v-tab> Team </v-tab>
        <v-tab> FAQ </v-tab>
      </v-tabs>
      <v-btn outlined class="white--text rounded-xl"> Sign Up </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
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

* {
  font-family: "Cairo", sans-serif;
}
</style>
