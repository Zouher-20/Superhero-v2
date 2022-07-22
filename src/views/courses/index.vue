<template>
  <div class="light relative">
    <div class="header">
      <h1 class="white--text pt-16 pl-16 title">Our Courses</h1>
    </div>
    <div class="d-flex justify-center" style="padding-top: 350px">
      <card
        v-for="course in items"
        :key="course.id"
        :title="course.name"
        :discription="course.description"
        :file="course.file"
        image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
    <!-- <div class="footer light"></div> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import card from "../../components/courses/card.vue";
export default {
  components: { card },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    ...mapActions("Courses", ["getItems"]),
  },
  computed: {
    ...mapGetters("Courses", ["items"]),
  },
  created() {
    this.getItems();
  },
};
</script>
<style>
.header {
  background-image: url("../../assets/courses/Courses.svg");
  background-size: contain;
  position: absolute;
  width: 100%;
  height: 400px;
}
/* .footer {
  background-image: url("../../assets/courses/footer.svg");
  background-size: cover;
  position: absolute;
  height: 300px;
  width: 100%;
} */
.title {
  position: absolute;
  left: 150px;
  top: 30px;
  font-size: 2.3rem !important;
}
.v-application .pl-16 {
  font-size: 2rem !important;
}
</style>
