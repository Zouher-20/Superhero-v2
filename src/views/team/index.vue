<template>
  <div class="bgNew">
    <div class="px-16 dark">
      <h2 class="white--text text-h4 pt-16">
        Amazing Team in superHeroes Community
      </h2>
    </div>
    <div class="d-flex flex-wrap justify-center align-center mg-t-100 pb-16">
      <div
        v-for="card in cards"
        :key="card"
        class="d-flex flex-wrap f justify-center align-center w-30"
      >
        <card
          class="w-100"
          :title="card.title"
          :discription="card.discription"
          :image="card.image"
        />
      </div>
    </div>
  </div>
</template>
<script>
import card from "../../components/team-card.vue";
import { teams } from "@/data/index.js";

export default {
  name: "team",
  components: { card },
  data() {
    return {
      cards: teams,
    };
  },
};
</script>
<style scoped>
.bgNew {
  background-image: url("@/assets/Background.svg");
  background-size: contain;
}

.mg-t-100 {
  margin-top: 20% !important;
  padding: 0 10%;
}

.w-100 {
  width: 100%;
}
</style>
