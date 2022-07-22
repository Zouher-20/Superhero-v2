<template>
  <div class="home-container">
    <div class="first-section-cont">
      <div class="first-section">
        <div
          class="text-h2 white--text text-center font-weight-bold"
          style="line-height: 110px"
        >
          Start the plan that best suits you with SuperHeroes Community
        </div>
        <div class="text-h6 mt-10 text-center" style="color: #c1c1c1">
          Learn and chart your way towards your dream with core team members and
          <br />
          experts in several IT fields through the unique plans that feature our
          platform.
          <v-text-field
            outlined
            rounded
            label="Search Plan"
            class="radius mt-16 white--text"
            dark
            color="primary"
          />
        </div>
      </div>
    </div>
    <div class="second-section-cont">
      <div class="second-section">
        <div class="text-h3 white--text text-center font-weight-bold">
          Some Of Our Awesome Plans
        </div>
        <div class="text-h6 mt-10 text-center" style="color: #c1c1c1">
          Learn and chart your way towards your dream with core team members and
          <br />
          experts in several IT fields through the unique plans that feature our
          platform.
          <v-text-field
            outlined
            rounded
            label="Search Plan"
            class="radius mt-16 white--text"
            dark
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.first-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;

  background-image: url("../../assets/Hero.svg");
  background-size: cover;
  height: 93vh;
}
.second-section-cont {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #090412;
  height: 93vh;
}
.first-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.second-section {
  width: 60%;
  display: flex;
  flex-direction: column;
}
</style>
