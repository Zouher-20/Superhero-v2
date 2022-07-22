<template>
  <v-card class="mx-3 pa-2 rounded-lg dark2 mb-10 card" max-width="300">
    <div style="height: min-content; overflow: hidden" class="rounded-lg">
      <v-img c :src="image" height="200px" class="image"></v-img>
    </div>

    <v-card-title class="white--text mb-3"> {{ title }}</v-card-title>

    <v-card-subtitle class="white--text d-flex items-center">
      {{ subtitle }}
    </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    subtitle: String,
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
