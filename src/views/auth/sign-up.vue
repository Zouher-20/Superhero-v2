<template>
  <section class="auth-container">
    <div class="text-h2 white--text font-weight-bold" style="width: 600px">
      Be Part Of Our Family
    </div>
    <auth-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="d-flex align-center justify-center mb-8">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-6"
            contain
            :src="require('../../assets/logo.svg')"
            transition="scale-transition"
            width="10"
          />
        </div>

        <v-text-field
          outlined
          label="Email"
          class="radius mt-1 white--text"
          dark
          color="primary"
          :rules="[(v) => !!v || 'Email is required']"
        />
        <v-text-field
          outlined
          label="Password"
          class="radius mt-1 white--text"
          dark
          v-model="password"
          :type="showPass ? 'text' : 'password'"
          color="primary"
          :rules="[(v) => !!v || 'Password is required']"
        >
          <template v-slot:append>
            <v-btn @click="showPass = true" icon color="grey">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template></v-text-field
        >
        <v-text-field
          outlined
          label="Confirm Password"
          class="radius mt-1 white--text"
          dark
          :type="showConf ? 'text' : 'password'"
          color="primary"
          :rules="[(v) => (!!v && v === password) || 'Password doesn\'t match']"
        >
          <template v-slot:append>
            <v-btn @click="showConf = true" icon color="grey">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template></v-text-field
        >
        <v-btn @click="sumbit" block color="primary" large class="radius mt-1"
          >Create</v-btn
        >
        <div class="mt-4 white--text">
          Already have an account ?<a
            @click="$router.push({ name: 'sign-in' })"
          >
            Login
          </a>
        </div>
      </v-form>
    </auth-card>
  </section>
</template>

<script>
import authCard from "@/components/auth/auth-card.vue";
export default {
  components: {
    authCard,
  },
  data() {
    return {
      showPass: false,
      showConf: false,
      valid: true,
      password: "",
    };
  },
  methods: {
    sumbit() {
      this.$refs.form.validate();
      if (this.valid) {
        console.log("true");
      }
    },
  },
};
</script>

<style lang="scss">
.auth-container {
  display: flex;
  justify-content: space-evenly;
  padding-top: 200px;
  height: 90vh;
  .v-text-field--outlined {
    border-radius: 16px;
  }
  .v-input__append-inner {
    margin-top: 12px;
  }
}
</style>
