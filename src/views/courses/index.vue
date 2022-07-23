<template>
  <div class="light relative">
    <div class="header">
      <h1 class="white--text pt-16 pl-16 title">Our Courses</h1>
    </div>
    <div class="d-flex justify-center pb-16" style="padding-top: 350px">
      <course
        v-for="course in items"
        :key="course.id"
        :title="course.name"
        :discription="course.description"
        :file="course.file"
        :image="course.image"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import course from "@/components/course/index.vue";
export default {
  components: { course },
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
  height: 50vh;
}

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
