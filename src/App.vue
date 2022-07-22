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
        <v-tab @click="$router.push('/')"> Home </v-tab>
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
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text class="white--text p-6">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
