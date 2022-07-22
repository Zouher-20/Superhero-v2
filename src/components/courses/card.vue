<template>
  <v-card class="mx-3 pa-2 rounded-lg dark2 mb-10 card" max-width="260">
    <div style="height: min-content; overflow: hidden" class="rounded-lg">
      <v-img c :src="image" height="200px" class="image"></v-img>
    </div>

    <v-card-title class="white--text mb-3"> {{ title }}</v-card-title>

    <v-card-subtitle class="white--text caption color">
      <p>{{ discription }}</p>
    </v-card-subtitle>

    <v-card-actions class="justify-end">
      <a class="white--text text-decoration-underline download mr-1">
        Download
      </a>

      <a class="dark2">
        <v-icon color="blue" small> mdi-download</v-icon>
      </a>
    </v-card-actions>
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
