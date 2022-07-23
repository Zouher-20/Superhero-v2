<template>
  <v-card class="mx-3 pa-2 rounded-lg dark2 mb-10 card" max-width="300">
    <div class="rounded-lg" style="height: min-content; overflow: hidden">
      <v-img c :src="image" height="200px" class="image"></v-img>
    </div>

    <v-card-title class="white--text mb-3"> {{ title }}</v-card-title>

    <v-card-subtitle class="white--text caption color">
      <div>{{ discription }}</div>
    </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
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
.color {
  p {
    color: rgba(216, 216, 216, 0.975);
  }
}
</style>
