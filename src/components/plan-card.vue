<template>
  <v-card class="mx-3 pa-2 rounded-lg dark2 mb-10 card" max-width="260">
    <div style="height: min-content; overflow: hidden" class="rounded-lg">
      <v-img c :src="image" height="200px" class="image"></v-img>
    </div>

    <v-card-title class="white--text mb-3"> {{ title }}</v-card-title>

    <v-card-subtitle class="white--text d-flex items-center">
      <v-icon class="mr-2" color="grey">mdi-clock</v-icon>
      <div>15hr</div>
    </v-card-subtitle>
    <v-card-text class="white--text">
      {{ discription }}
    </v-card-text>

    <v-card-actions
      class="py-2 px-4 accent rounded-lg"
      style="width: fit-content"
    >
      {{ level }}
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    level: String,
    discription: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.card {
  cursor: pointer;
}
.image {
  transition: all 0.3s ease;
}
.card:hover {
  .image {
    transform: scale(1.1);
  }
}
.download {
  font-size: 12px;
}
</style>
