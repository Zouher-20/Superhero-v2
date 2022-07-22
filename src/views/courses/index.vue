<template>
  <div class="pink">
    <div class="header">
      <h2 class="white--text pt-16 pl-16">Our Courses</h2>
    </div>

    <div class="d-flex justify-center mt-16">
      <card
        title="hamza"
        discription="The academic qualification for this subject is the basics of programming"
        image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <card
        title="hamza"
        discription="The academic qualification for this subject is the basics of programming"
        image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <card
        title="hamza"
        discription="The academic qualification for this subject is the basics of programming"
        image="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import card from "../../components/courses/card.vue";
export default {
  components: { card },
};
</script>
<style>
.header {
  background-image: url("../../assets/courses/Courses.svg");
  background-size: contain;
  padding-bottom: 208px;
  width: 1800px;
}
.footer {
  background-image: url("../../assets/courses/footer.svg");
  background-size: contain;
  height: 300px;
}
</style>
